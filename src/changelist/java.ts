export const javaChangeList: [RegExp, string][] = [
  [/((?:^\s*|\n)def\s)\s((\w[a-zA-Z0-9_]*)?)/g, '$1_$2'],
  [/((?:^\s*|\n)def\s\w[a-zA-Z0-9_]*)\s/g, '$1_'],
  [/((?:^\s*|\n)public void\s\w[a-zA-Z0-9_]*)\s[a-z]/g, '$1_'],
  // [/((?:^\s*|\n)def\s\w)-/g, '$1_'],
  // Add more Python-specific regex tuples here
];