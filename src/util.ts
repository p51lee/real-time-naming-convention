import { Rule } from "./types";
import { pythonRules } from "./rules/python";

export function update(phrases: Rule[], text: string): string {
  let updatedText = text;
  for (const phrase of phrases) {
    updatedText = updatedText.replace(phrase.pattern, phrase.replacer);
  }
  return updatedText;
}

export function testUtil(): void {
  let t = update(pythonRules, "some_=");
  console.log(t.toString());
}