import { createIfSnippet, createIfElseSnippet, createForSnippet, createWhileSnippet } from './snippets';

self.onmessage = function (event) {
  const { action, data } = event.data;

  switch (action) {
    case 'provideCompletionItems':
      const { modelValue, position } = data;
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: position.column,
        endColumn: position.column,
      };

      const suggestions = [];

      if (modelValue.includes("if")) {
        suggestions.push(createIfSnippet(range));
        suggestions.push(createIfElseSnippet(range));
      }

      if (modelValue.includes("for")) {
        suggestions.push(createForSnippet(range));
      }

      if (modelValue.includes("while")) {
        suggestions.push(createWhileSnippet(range));
      }

      self.postMessage({ action: 'completionItems', suggestions: suggestions });
      break;

    default:
      break;
  }
};
