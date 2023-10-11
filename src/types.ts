export enum Convention {
  snakeCase,
  camelCase,
  pascalCase
}

export type ConventionPhrase = {
  pattern: RegExp
  convention: Convention;
  replacer: (substring: string, ...args: any[]) => string;
};

// export type UpdateOutput = {
//   updatedText: string;
//   updatedPos: number;
// };