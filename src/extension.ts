import * as vscode from 'vscode';
import { pythonPhrases } from './changelist/python';
import { ConventionPhrase } from './types';
import { update } from './util';

// The extension is activated the very first time the command is executed

const phraseMap: { [key: string]: ConventionPhrase[] } = {
	'py': pythonPhrases,
	// TODO: Add more file extensions
};

// Called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.workspace.onDidChangeTextDocument((event) => {
		let editor = vscode.window.activeTextEditor;
		if (editor) {
			let document = editor.document;
			let fileExtension = document.fileName.split('.').pop();

			if (fileExtension && phraseMap.hasOwnProperty(fileExtension)) {
				let position = editor.selection.active;
				let line = document.lineAt(position.line);
				let leftText = line.text.substring(0, position.character + 1);

				let updatedLeftText = update(phraseMap[fileExtension], leftText);

				if (leftText !== updatedLeftText) {
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
						}
					});
				}
			}
		}
	});

	context.subscriptions.push(disposable);
}

// Called when the extension is deactivated
export function deactivate() { }
