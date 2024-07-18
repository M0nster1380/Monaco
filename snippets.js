export function createIfSnippet(range) {
  return {
    label: "if",
    kind: "snippet",
    insertText: [
      "if (${1:condition}) {",
      "\t${2:-- code}",
      "}"
    ].join('\n'),
    insertTextRules: 4, // monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    detail: 'Конструкция if',
    documentation: 'Документация для if',
    range: range
  };
}

export function createIfElseSnippet(range) {
  return {
    label: "if...else",
    kind: "snippet",
    insertText: [
      "if (${1:condition}) {",
      "\t${2:-- code}",
      "} else {",
      "\t${3:-- code}",
      "}"
    ].join('\n'),
    insertTextRules: 4, // monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    detail: 'Конструкция if...else',
    documentation: 'Документация для if...else',
    range: range
  };
}

export function createForSnippet(range) {
  return {
    label: "for",
    kind: "snippet",
    insertText: [
      "for (let ${1:i} = 0; ${1:i} < ${2:length}; ${1:i}++) {",
      "\t${3:-- code}",
    ].join('\n'),
    insertTextRules: 4, // monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    detail: 'Конструкция for',
    documentation: 'Документация для for',
    range: range
  };
}

export function createWhileSnippet(range) {
  return {
    label: "while",
    kind: "snippet",
    insertText: [
      "while (${1:condition}) {",
      "\t${2:-- code}",
    ].join('\n'),
    insertTextRules: 4, // monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    detail: 'Конструкция while',
    documentation: 'Документация для while',
    range: range
  };
}
