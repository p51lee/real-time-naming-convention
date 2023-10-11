import { Convention, ConventionPhrase } from "../types";

// legacy
export const pythonChangeList: [RegExp, string][] = [
  [/((?:^\s*)(?:(?!(def|class))\w+))\s/, '$1_'],
  [/((?:^\s*)(?:(?!def)\w+))_=/, '$1 ='],
  [/((?:^\s*)def\s\w*)\s/, '$1_'],
  [/((?:^\s*)def\s\w+\(\w*(?:,\s\w*)*)\s/g, '$1_'],
];

// blank spaces right afther these patterns changes into "_".
export const pythonPhrases: ConventionPhrase[] = [
  // variable names (snake_case)
  {
    pattern: /(?:^\s*)(?:(?!def|class)\w+)\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: /(?:^\s*)(?:(?!def)\w+)_=/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -2) + " ="
  },
  // function names (snake_case)
  {
    pattern: /(?:^\s*)def\s\w*\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  // function parameter names (snake_case)
  {
    pattern: /(?:^\s*)def\s\w+\(\w*(?:,\s\w*)*\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  // TODO: variable name in for loop (snake)
  // TODO: class name (pascal)
  // TODO: class field (e.g. self.my_field = 42)
];