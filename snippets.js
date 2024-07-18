// snippets.js

import * as monaco from 'monaco-editor';

// Функция для создания сниппета if
export function createIfSnippet(range) {
  return {
    label: 'if',
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: [
      'if (${1:condition}) {',
      '\t${2:-- code}',
      '}'
    ].join('\n'),
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range,
    detail: 'Конструкция if',
    documentation: 'Документация для if'
  };
}

// Функция для создания сниппета if...else
export function createIfElseSnippet(range) {
  return {
    label: 'if...else',
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: [
      'if (${1:condition}) {',
      '\t${2:-- code}',
      '} else {',
      '\t${3:-- code}',
      '}'
    ].join('\n'),
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range,
    detail: 'Конструкция if...else',
    documentation: 'Документация для if...else'
  };
}

// Функция для создания сниппета while
export function createWhileSnippet(range) {
  return {
    label: 'while',
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: [
      'while (${1:condition}) {',
      '\t${2:-- code}',
      '}'
    ].join('\n'),
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range,
    detail: 'Конструкция while',
    documentation: 'Документация для while'
  };
}

// Функция для создания сниппета for
export function createForSnippet(range) {
  return {
    label: 'for',
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: [
      'for (let ${1:i} = 0; ${1:i} < ${2:length}; ${1:i}++) {',
      '\t${3:-- code}',
      '}'
    ].join('\n'),
    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    range: range,
    detail: 'Конструкция for',
    documentation: 'Документация для for'
  };
}
