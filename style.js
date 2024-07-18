// highlighting.js
define([], function () {
  return function (monaco) {
    monaco.languages.register({ id: "mylang" });

    monaco.languages.setMonarchTokensProvider("mylang", {
      keywords: [
        "if", "else", "while", "do", "return", "let", "const", "var", "function"
      ],
      dataTypes: [
        "int", "float", "double", "char", "string", "boolean", "void"
      ],
      operators: [
        "=", "==", "!=", "<", "<=", ">", ">=", "+", "-", "*", "/", "&&", "||", "!"
      ],
      delimiters: [
        ";", ",", "."
      ],
      tokenizer: {
        root: [
          [/[a-z_$][\w$]*/, { cases: { 
            "@keywords": "keyword",
            "@dataTypes": "dataType",
            "@default": "identifier" 
          }}],
          [/\d+/, "number"],
          [/[{}()<>\[\]]/, "brackets"],
          [/[;,]/, "delimiter"],
          [/--.*$/, "comment"], // Single line comment
          [/[=<>!+\-*/&|]/, "operator"],
          [/"([^"\\]|\\.)*$/, "string.invalid"],  // non-terminated string
          [/'([^'\\]|\\.)*$/, "string.invalid"],  // non-terminated string
          [/"/, "string", '@string_double'],
          [/'/, "string", "@string_single"],
        ],
        string_double: [
          [/[^\\"]+/, "string"],
          [/\\./, "string.escape"],
          [/"/, { token: "string", bracket: "@close", next: "@pop" }]
        ],
        string_single: [
          [/[^\\']+/, "string"],
          [/\\./, "string.escape"],
          [/'/, { token: "string", bracket: "@close", next: "@pop" }]
        ],
      },
    });

    monaco.languages.setLanguageConfiguration("mylang", {
      comments: {
        lineComment: "--",
        //blockComment: ["/*", "*/"],
      },
      brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
        ["<", ">"],
      ],
      autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: "<", close: ">" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
      ],
      surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
      ],
    });

    // Define a custom theme
    monaco.editor.defineTheme("myCustomTheme", {
      base: "vs", // can also be vs-dark or hc-black
      inherit: true, // inherit from base
      rules: [
        { token: "keyword", foreground: "FF0000" }, // Red color for keywords
        { token: "dataType", foreground: "FF1493" }, // Deep Pink for data types
        { token: "operator", foreground: "FF0000" }, // Dark Red for operators
        { token: "identifier", foreground: "000000" }, // Black color for identifiers
        { token: "number", foreground: "008800" }, // Green color for numbers
        { token: "string", foreground: "FFA500" }, // Orange color for strings
        { token: "delimiter", foreground: "000000" }, // Black color for delimiters
        { token: "comment", foreground: "808080", fontStyle: "italic" }, // Gray italic color for comments
        { token: "brackets", foreground: "457EFF" } // Teal color for brackets
      ],
      colors: {
        "editor.foreground": "#000000", // Black color for normal text
        "editor.background": "#FFFFFF", // White color for editor background
        "editorCursor.foreground": "#8B0000", // Dark red color for the cursor
        "editor.lineHighlightBackground": "#0000FF20", // Light blue color for line highlight
        "editorLineNumber.foreground": "#000000", // Black color for line numbers
        "editor.selectionBackground": "#88000030" // Light red color for selected text
      }
    });
  };
});
