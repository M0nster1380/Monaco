

require.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.30.1/min/vs",
  },
});

require(["vs/editor/editor.main", "style", "snippets"], function (monaco, setupHighlighting, snippets) {
  setupHighlighting(monaco);

  monaco.languages.registerCompletionItemProvider("mylang", {
    triggerCharacters: ["."],
    provideCompletionItems: function (model, position) {
      const textUntilPosition = model.getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      });
  
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };
  
      const suggestions = [];
  
      // Check for dot notation
      const match = textUntilPosition.match(/([_a-zA-Z]\w*)\.$/);
      if (match != null) {
        const objectName = match[1];
        // Define the fields for the object
        const fields = {
          myObject: ["field1", "field2", "field3"],
          anotherObject: ["fieldA", "fieldB", "fieldC"],
        };
        if (fields[objectName]) {
          fields[objectName].forEach((field) => {
            suggestions.push({
              label: field,
              kind: monaco.languages.CompletionItemKind.Field,
              insertText: field,
              range: range,
            });
          });
        }
      } else {
        // If the dot is not preceded by a valid variable, do not provide suggestions
        if (textUntilPosition.endsWith(".")) {
          return { suggestions: [] };
        }
        
        // Default suggestions
        suggestions.push({
          label: "myObject",
          kind: monaco.languages.CompletionItemKind.Variable,
          insertText: "myObject",
          range: range,
        });
        suggestions.push({
          label: "anotherObject",
          kind: monaco.languages.CompletionItemKind.Variable,
          insertText: "anotherObject",
          range: range,
        });
      }
  
      // Add snippets using functions from snippets.js
      suggestions.push(snippets.createIfSnippet(range));
      suggestions.push(snippets.createIfElseSnippet(range));
      suggestions.push(snippets.createForSnippet(range));
      suggestions.push(snippets.createWhileSnippet(range));
  
      return { suggestions: suggestions };
    },
  });
  
});