import * as assert from 'assert';
import * as vscode from 'vscode';
import { update } from '../../util';
import { pythonRules } from '../../rules/python';


suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Python rule test', () => {
		// variable names
		assert.strictEqual("some_", update(pythonRules, "some "));
		assert.strictEqual("  some_", update(pythonRules, "  some "));
		assert.strictEqual("def ", update(pythonRules, "def "));  // reserved word
		// function names
		assert.strictEqual("def some_", update(pythonRules, "def some "));
		assert.strictEqual("  def some_", update(pythonRules, "  def some "));
		assert.strictEqual("def s_f (", update(pythonRules, "def s_f_("));
		// function parameter names
		assert.strictEqual("def s_f(s_", update(pythonRules, "def s_f(s "));
		assert.strictEqual("def s_f (s_", update(pythonRules, "def s_f (s "));
		assert.strictEqual("def s_f ( s_", update(pythonRules, "def s_f ( s "));
		assert.strictEqual("def s_f (s_p, s_", update(pythonRules, "def s_f (s_p, s "));
		assert.strictEqual("def s_f (s_p , s_", update(pythonRules, "def s_f (s_p , s "));
		// class names
		assert.strictEqual("class S", update(pythonRules, "class s"));
		assert.strictEqual("class SomeC", update(pythonRules, "class some c"));
		// class field names
		assert.strictEqual("self.some_", update(pythonRules, "self.some "));
	});
});
