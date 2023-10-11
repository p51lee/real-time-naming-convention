import { Convention, ConventionPhrase } from "./types";
import { pythonPhrases } from "./changelist/python";

// function getReservedRegex(phrase: ReservedWord[]): RegExp[] {
//   if (phrase.length === 0) { return [RegExp("")]; }
//   let tailTmp = getReservedRegex(phrase.slice(1));
//   let head = phrase[0];
//   let tmp = head.words.flatMap(w => tailTmp.map(s => RegExp(w.source + s.source)));
//   if (head.optional) {
//     return tmp.concat(tailTmp);
//   } else {
//     return tmp;
//   }
// }

// function getReservedRegex(phrases: ReservedPhrase[]): RegExp[] {
//   return phrases.flatMap(p => getReservedRegexSuppl(p.phrase));
// }

export function update(phrases: ConventionPhrase[], text: string): string {
  let updatedText = text;
  for (const phrase of phrases) {
    updatedText = updatedText.replace(phrase.pattern, phrase.replacer);
  }
  return updatedText;
}

export function testUtil(): void {
  // let t = getReservedRegex(pythonReservedPhrase[0].phrase);
  let t = update(pythonPhrases, "some_=");
  console.log(t.toString());
}