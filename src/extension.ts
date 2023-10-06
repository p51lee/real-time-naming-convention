// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
type RegexTuple = [RegExp, string];

const pythonChangeList: RegexTuple[] = [
	[/print\((.*)\)/g, 'console.log($1)'],
	// Add more Python-specific regex tuples here
];

const cChangeList: RegexTuple[] = [
	[/\/\/(.*)/g, '/* $1 */'],
	// Add more C-specific regex tuples here
];

const changeLists: { [key: string]: RegexTuple[] } = {
	'py': pythonChangeList,
	'c': cChangeList,
	// Add more file extensions and their change lists here
};

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.workspace.onDidChangeTextDocument((event) => {
		let editor = vscode.window.activeTextEditor;
		if (editor) {
			let document = editor.document;
			let fileExtension = document.fileName.split('.').pop();

			if (fileExtension && changeLists.hasOwnProperty(fileExtension)) {
				let position = editor.selection.active;
				let line = document.lineAt(position.line);
				let lineText = line.text;

				let updatedLineText = lineText;
				for (const [findRegex, replaceWith] of changeLists[fileExtension]) {
					updatedLineText = updatedLineText.replace(findRegex, replaceWith);
				}

				if (lineText !== updatedLineText) {
					editor.edit((editBuilder) => {
						let range = new vscode.Range(
							new vscode.Position(position.line, 0),
							new vscode.Position(position.line, line.text.length)
						);
						editBuilder.replace(range, updatedLineText);
					}).then(() => {
						// Set the cursor to the beginning of the line
						if (editor) {
							let newPosition = new vscode.Position(position.line, updatedLineText.length);
							editor.selection = new vscode.Selection(newPosition, newPosition);
						}
					});
				}
			}
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
