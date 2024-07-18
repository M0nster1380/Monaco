require.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.30.1/min/vs",
  },
});
require(["vs/editor/editor.main"], function () {
  require(["./style"], function (highlighting) {
    highlighting(monaco);

    window.editor = monaco.editor.create(document.getElementById("container"), {
      value: "myObject.",
      language: "mylang",
      theme: "myCustomTheme", // Apply the custom theme here
    });

    editor.updateOptions({
      readOnly: false, // Make the editor editable
      lineNumbers: "on", // Show line numbers
      fontSize: 16, // Set font size to 16px
      minimap: { enabled: false }, // Disable minimap
      wordWrap: "on", // Enable word wrap
      scrollBeyondLastLine: false, // Prevent scrolling beyond the last line
      tabSize: 4, // Set tab size to 4 spaces
    });
  });
});

function getText() {
  window.editor.getValue();
}
