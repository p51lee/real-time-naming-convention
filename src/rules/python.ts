import { Convention, Rule } from "../types";

const reservedWords: string[] = [
  'False', 'await', 'else', 'import', 'pass',
  'None', 'break', 'except', 'in', 'raise',
  'True', 'class', 'finally', 'is', 'return',
  'and', 'continue', 'for', 'lambda', 'try',
  'as', 'def', 'from', 'nonlocal', 'while',
  'assert', 'del', 'global', 'not', 'with',
  'async', 'elif', 'if', 'or', 'yield'
];
const excludePattern = `(?!(?:${reservedWords.join('|')})\\b)`;

// naming convention helper only modifies declaration
export const pythonRules: Rule[] = [
  // Variable Assignments (snake_case)
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

  // Function and Method Definitions (snake_case)
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

  // Class Definitions (PascalCase)
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

  // For Loops
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

  // List Comprehensions
  {
    pattern: /\sfor\s\w*\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: /\sfor\s\w+_in/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -3) + " in"
  },

  // With / Import / Except Statements
  {
    pattern: /\sas\s\w*\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: /\sas\s\w+_:/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -3) + " :"
  },

  // Lambda Function Parameters
  {
    pattern: /\blambda\s+\w*(?:\s?,\s\w*)*\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: /\blambda\s+\w*(?:\s?,\s\w+)*_,/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -2) + " ,"
  },
  {
    pattern: /\blambda\s+\w*(?:\s?,\s\w+)*_:/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -2) + " :"
  },

  // Class Attributes (snake_case)
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

  // Global and Nonlocal Statements (snake_case)
  {
    pattern: /\bglobal\s+\w*(?:\s?,\s\w*)*\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: /\bglobal\s+\w*(?:\s?,\s\w+)*_,/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -2) + " ,"
  },
  {
    pattern: /\bnonlocal\s+\w*(?:\s?,\s\w*)*\s/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -1) + "_"
  },
  {
    pattern: /\bnonlocal\s+\w*(?:\s?,\s\w+)*_,/,
    convention: Convention.snakeCase,
    replacer: text => text.slice(0, -2) + " ,"
  },

  // Function Parameter (snake_case)
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
];