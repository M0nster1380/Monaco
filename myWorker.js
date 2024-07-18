let monaco;

self.onmessage = function(e) {
  const data = e.data;

  if (data.method === 'init') {
    monaco = data.monaco;
    importScripts('snippets.js');
  }

  if (data.method === 'completionItems') {
    const model = data.model;
    const position = data.position;
    const range = data.range;
    const suggestions = [];

    // Add snippets using functions from snippets.js
    suggestions.push(snippets.createIfSnippet(range));
    suggestions.push(snippets.createIfElseSnippet(range));
    suggestions.push(snippets.createForSnippet(range));
    suggestions.push(snippets.createWhileSnippet(range));

    self.postMessage({ method: 'completionItemsResult', suggestions: suggestions });
  }
};
