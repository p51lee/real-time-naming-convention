import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { pythonRules, camelRules, snakeRules } from './rules/python';
import { Rule } from './types';
import { update, check } from './util';

// The extension is activated the very first time the command is executed

const camelRuleMap: { [key: string]: Rule[] } = {
	'py': camelRules,
};

const snakeRuleMap: { [key: string]: Rule[] } = {
	'py': snakeRules,
};

const ruleMap: { [key: string]: Rule[] } = {
	'py': pythonRules,
};

const snakePreviewDecorationType = vscode.window.createTextEditorDecorationType({
	after: {
		contentText: '🐍',
	}
});

const camelPreviewDecorationType = vscode.window.createTextEditorDecorationType({
	after: {
		contentText: '🐫',
	}
});

const snakeLineDecorationType = vscode.window.createTextEditorDecorationType({
	// greenish
	backgroundColor: 'rgba(144, 238, 144, 0.2)', // Light green color
	isWholeLine: true,
});

const pascalLineDecorationType = vscode.window.createTextEditorDecorationType({
	// yellowish
	backgroundColor: 'rgba(255, 255, 224, 0.2)', // Light yellow color
	isWholeLine: true,
});

let recordingStatusBarItem: vscode.StatusBarItem;
let startTime: number | null = null;
let totalCharacters = 0;
let totalBackspaces = 0;
let typerName = "";

let intervalId: NodeJS.Timeout | null = null;
let isRecording = false;

function createRecordingStatusBarItem(): vscode.StatusBarItem {
	const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	item.text = `Now recording...`;
	return item;
}

let inputLog: string = "";

// Called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
	let textDisposable = vscode.workspace.onDidChangeTextDocument((event) => {
		let editor = vscode.window.activeTextEditor;
		if (editor) {
			let document = editor.document;
			let fileExtension = document.fileName.split('.').pop();
			let showIcon = vscode.workspace.getConfiguration('RTNC').get('showIcon');
			let showLine = vscode.workspace.getConfiguration('RTNC').get('showLine');

			if (fileExtension && ruleMap.hasOwnProperty(fileExtension)) {

				let position = editor.selection.active;
				let line = document.lineAt(position.line);
				let leftText = line.text.substring(0, position.character + 1);

				// check if the change was a deletion
				let isDeletion = event.contentChanges.some((change) => change.text === "");

				// show icon indicator
				const newPosition = position.translate(0, 1);
				if (showIcon && check(snakeRuleMap[fileExtension], leftText)) {
					editor.setDecorations(snakePreviewDecorationType, [new vscode.Range(newPosition, newPosition)]);
				} else if (showIcon && check(camelRuleMap[fileExtension], leftText)) {
					editor.setDecorations(camelPreviewDecorationType, [new vscode.Range(newPosition, newPosition)]);
				} else {
					editor.setDecorations(snakePreviewDecorationType, []);
					editor.setDecorations(camelPreviewDecorationType, []);
				}

				// show line indicator
				const lineDecorationOptions: vscode.DecorationOptions[] = [{
					range: new vscode.Range(position.line, 0, position.line, Number.MAX_VALUE)
				}];
				if (showLine && check(snakeRuleMap[fileExtension], leftText)) {
					editor.setDecorations(snakeLineDecorationType, lineDecorationOptions);
				} else if (showLine && check(camelRuleMap[fileExtension], leftText)) {
					editor.setDecorations(pascalLineDecorationType, lineDecorationOptions);
				} else {
					editor.setDecorations(snakeLineDecorationType, []);
					editor.setDecorations(pascalLineDecorationType, []);
				}

				if (isDeletion) { return; }

				let updatedLeftText = update(ruleMap[fileExtension], leftText);

				if (leftText !== updatedLeftText && !isRecording) {
					editor.edit((editBuilder) => {
						let range = new vscode.Range(
							new vscode.Position(position.line, 0),
							new vscode.Position(position.line, position.character + 1)
						);
						editBuilder.replace(range, updatedLeftText);
					}).then(() => {
						// Set the cursor to the rightmost position of `leftText`
						if (editor) {
							let newPosition = new vscode.Position(position.line, updatedLeftText.length);
							editor.selection = new vscode.Selection(newPosition, newPosition);
							if (fileExtension) {
								if (showIcon && check(snakeRuleMap[fileExtension], updatedLeftText)) {
									editor.setDecorations(snakePreviewDecorationType, [new vscode.Range(newPosition, newPosition)]);
								} else if (showIcon && check(camelRuleMap[fileExtension], updatedLeftText)) {
									editor.setDecorations(camelPreviewDecorationType, [new vscode.Range(newPosition, newPosition)]);
								} else {
									editor.setDecorations(snakePreviewDecorationType, []);
									editor.setDecorations(camelPreviewDecorationType, []);
								}
							}
						}
					});
				}
			}
		}
	});

	const textChangeListener = vscode.workspace.onDidChangeTextDocument((event) => {
		event.contentChanges.forEach((change) => {
			totalCharacters += change.text.length;
			if (change.text === "") {
				totalBackspaces += change.rangeLength;
				inputLog += "\b".repeat(change.rangeLength);
			} else {
				inputLog += change.text;
			}
		});
	});
	context.subscriptions.push(textChangeListener);

	let recordDisposable = vscode.commands.registerCommand('RTNC.record-rtnc', async () => {
		if (isRecording) {
			vscode.window.showErrorMessage('Recording is already in progress');
			return;
		}
		isRecording = true;

		totalCharacters = 0;
		totalBackspaces = 0;
		startTime = Date.now();
		inputLog = "";

		typerName = await vscode.window.showInputBox({ prompt: "Enter your name" }) || "Unknown";
		typerName = typerName.replace(/[^a-zA-Z0-9]/g, "_");


		recordingStatusBarItem = createRecordingStatusBarItem();
		recordingStatusBarItem.show();

		// Start the timer
		intervalId = setInterval(() => {
			const elapsedTime = (Date.now() - (startTime || Date.now())) / 1000;
			recordingStatusBarItem.text = `Now recording... ${elapsedTime.toFixed(0)}s`;
		}, 1000);
	});

	let stopDisposable = vscode.commands.registerCommand('RTNC.stop-rtnc', () => {
		if (!isRecording) {
			vscode.window.showErrorMessage('No recording is in progress');
			return;
		}
		isRecording = false;

		const endTime = Date.now();
		const elapsedTime = (endTime - (startTime || endTime)) / 1000;

		const logData = {
			typer: typerName,
			elapsedTime: elapsedTime,
			totalCharacters: totalCharacters,
			totalBackspaces: totalBackspaces,
			totalInputLog: inputLog,
		};

		// Generate a unique filename
		const filename = `${new Date().toISOString().replace(/[:.]/g, '-')}_${typerName}.json`;

		// Get the path to the root directory of the current workspace
		const workspacePath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;

		if (workspacePath) {
			// Create the full path to the .vscode/logs directory
			const logDirectoryPath = path.join(workspacePath, '.vscode', 'logs');

			// Create the log directory if it doesn't exist
			if (!fs.existsSync(logDirectoryPath)) {
				fs.mkdirSync(logDirectoryPath, { recursive: true });
			}

			// Create the full path to the log file
			const filePath = path.join(logDirectoryPath, filename);

			// Write data to a JSON file
			fs.writeFileSync(filePath, JSON.stringify(logData, null, 2));

			// Show a message
			vscode.window.showInformationMessage('Recording stopped and data saved.');
		} else {
			vscode.window.showErrorMessage('No workspace open');
		}
		recordingStatusBarItem.hide();

		// Stop the timer
		if (intervalId) {
			clearInterval(intervalId);
		}

	});



	context.subscriptions.push(textDisposable, recordDisposable, stopDisposable);
}

// Called when the extension is deactivated
export function deactivate() {
	recordingStatusBarItem.dispose();
}
