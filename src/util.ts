import { ConventionPhrase } from "./types";
import { pythonPhrases } from "./changelist/python";

export function update(phrases: ConventionPhrase[], text: string): string {
  let updatedText = text;
  for (const phrase of phrases) {
    updatedText = updatedText.replace(phrase.pattern, phrase.replacer);
  }
  return updatedText;
}

export function testUtil(): void {
  let t = update(pythonPhrases, "some_=");
  console.log(t.toString());
}