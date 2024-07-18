require.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.30.1/min/vs",
  },
});
require(["vs/editor/editor.main"], function () {
  require(["style"], function (highlighting) {
    highlighting(monaco);

    window.editor = monaco.editor.create(document.getElementById("container"), {
      value: "myObject.",
      language: "mylang",
      theme: "myCustomTheme",
    });

    editor.updateOptions({
      readOnly: false,
      lineNumbers: "on",
      fontSize: 16,
      minimap: { enabled: false },
      wordWrap: "on",
      scrollBeyondLastLine: false,
      tabSize: 4,
    });
  });
});

require(["vs/editor/editor.main", "style", "snippets"], function (monaco, setupHighlighting, snippets) {
  setupHighlighting(monaco);

  const workerUrl = URL.createObjectURL(new Blob([`
    importScripts('myWorker.js');
  `], { type: 'application/javascript' }));

  const worker = new Worker(workerUrl);

  worker.onmessage = function(e) {
    console.log('Message received from worker', e.data);
  };

  worker.onerror = function(error) {
    console.error('Worker error:', error);
  };

  worker.postMessage({ method: 'init', monaco: monaco });

  monaco.languages.registerCompletionItemProvider("mylang", {
    triggerCharacters: ["."],
    provideCompletionItems: function (model, position) {
      return new Promise((resolve, reject) => {
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

        worker.postMessage({
          method: 'completionItems',
          model: model.getValue(),
          position: model.getOffsetAt(position),
          range: range
        });

        worker.onmessage = function(e) {
          if (e.data.method === 'completionItemsResult') {
            resolve({ suggestions: e.data.suggestions });
          }
        };

        worker.onerror = function(error) {
          reject(error);
        };
      });
    },
  });
});
