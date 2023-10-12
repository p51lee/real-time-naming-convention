import { Convention, Rule } from "../types";

const reservedWords = ['def', 'class', 'if', 'elif', 'else', 'for', 'while', 'return'];
const excludePattern = `(?!(?:${reservedWords.join('|')})\\b)`;

// naming convention helper only modifies declaration
export const pythonRules: Rule[] = [
  // variable name (snake_case)
  {
    pattern: RegExp(`((?:^\\s*)${excludePattern}\\w+)\\s`),
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: RegExp(`((?:^\\s*)${excludePattern}\\w+)_=`),
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -2) + " ="
  },
  // variable name in for loop
  {
    pattern: /(?:^\s*)for\s\w*\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: /(?:^\s*)for\s\w+_in/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -3) + " in"
  },
  // function name (snake_case)
  {
    pattern: /(?:^\s*)def\s\w*\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: /(?:^\s*)def\s\w+_\(/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -2) + " ("
  },
  // function parameter name (snake_case)
  {
    pattern: /(?:^\s*)def\s\w+\s?\(\s?\w*(?:\s?,\s\w*)*\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: /(?:^\s*)def\s\w+\s?\(\s?\w*(?:\s?,\s\w+)*_,/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -2) + " ,"
  },
  // class name (PascalCase)
  {
    pattern: /(?:^\s*)class\s[a-z]/,
    convention: Convention.pascalCase,
    replacer: text => text.slice(0, -1) + text.slice(-1).toUpperCase()
  },
  {
    pattern: /(?:^\s*)class\s\w+\s\w/,
    convention: Convention.pascalCase,
    replacer: text => text.slice(0, -2) + text.slice(-1).toUpperCase()
  },
  // class field name
  {
    pattern: /(?:^\s*)self\.\w+\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: /(?:^\s*)self\.\w+_=/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -2) + " ="
  },
  // TODO: variable name in for loop (snake)
  // TODO: variable name in list comprehension
  // TODO: variable name in lambda expression
];