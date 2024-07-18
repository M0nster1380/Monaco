// snippets.js
define([], function () {
  function createIfSnippet(range) {
    return {
      label: "if",
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        "if (${1:condition}) {",
        "\t${2:-- code}",
        "}"
      ].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      range: range,
      detail: 'Конструкция if', 
      documentation: 'Документация для if',
    };
  }

  function createIfElseSnippet(range) {
    return {
      label: "if...else",
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        "if (${1:condition}) {",
        "\t${2:-- code}",
        "} else {",
        "\t${3:-- code}",
        "}"
      ].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'Конструкция if...else',
      documentation: 'Документация для if...else',
      range: range
    };
  }

  function createForSnippet(range) {
    return {
      label: "for",
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        "for (let ${1:i} = 0; ${1:i} < ${2:length}; ${1:i}++) {",
        "\t${3:-- code}",
        "}"
      ].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'Конструкция for',
      documentation: 'Документация для for',
      range: range
    };
  }

  function createWhileSnippet(range) {
    return {
      label: "while",
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: [
        "while (${1:condition}) {",
        "\t${2:-- code}",
        "}"
      ].join('\n'),
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      detail: 'Конструкция while',
      documentation: 'Документация для while',
      range: range
    };
  }

  return {
    createIfSnippet,
    createIfElseSnippet,
    createForSnippet,
    createWhileSnippet
  };
});
