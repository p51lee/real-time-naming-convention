export enum Convention {
  snakeCase,
  camelCase,
  pascalCase
}

export type Rule = {
  pattern: RegExp
  convention: Convention;
  replacer: (substring: string, ...args: any[]) => string;
};
