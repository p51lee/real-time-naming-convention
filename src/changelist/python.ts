import { Convention } from '../util';

export const pythonChangeList: [RegExp, string][] = [
  [/print\((.*)\)/g, 'console.log($1)'],
  [/((?:^\s*|\n)def\s)-((\w[a-zA-Z0-9_]*)?)/g, '$1_$2'],
  [/((?:^\s*|\n)def\s\w[a-zA-Z0-9_]*)-/g, '$1_'],
  [/((?:^\s*|\n)def\s)\s((\w[a-zA-Z0-9_]*)?)/g, '$1_$2'],
  [/((?:^\s*|\n)def\s\w[a-zA-Z0-9_]*)\s/g, '$1_'],
  // [/((?:^\s*|\n)def\s\w)-/g, '$1_'],
  // Add more Python-specific regex tuples here
];
