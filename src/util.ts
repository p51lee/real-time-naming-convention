import { Rule } from "./types";
import { pythonRules } from "./rules/python";

export function update(rules: Rule[], text: string): string {
  let updatedText = text;
  for (const rule of rules) {
    const anchoredPattern = new RegExp(rule.pattern.source + "$");
    updatedText = updatedText.replace(anchoredPattern, rule.replacer);
  }
  return updatedText;
}

export function check(rules: Rule[], text: string): boolean {
  for (const rule of rules) {
    const anchoredPattern = new RegExp(rule.pattern.source + "$");
    if (anchoredPattern.test(text)) {
      return true;
    }
  }
  return false;
}

export function testUtil(): void {
  let t = update(pythonRules, "some_=");
  console.log(t.toString());
}