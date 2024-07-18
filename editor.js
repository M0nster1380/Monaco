// editor.js

import * as monaco from 'monaco-editor';
import { globalStyle } from './style.js';
import * as snippets from './snippets.js';
import './newLang.js'; // Импорт интеграции с пользовательским языком

// Настройка глобальных стилей
monaco.editor.defineTheme('myCustomTheme', {
  base: 'vs-dark',
  inherit: true,
  rules: [],
  colors: {
    'editor.background': '#1e1e1e',
    'editor.foreground': '#d4d4d4',
    // Добавьте другие цветовые настройки
  },
  ...globalStyle // Применение глобальных стилей
});

// Загрузка редактора и его настройка
require.config({
  paths: {
    vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.30.1/min/vs'
  }
});

require(['vs/editor/editor.main'], function () {
  monaco.editor.create(document.getElementById('container'), {
    value: 'console.log("Hello, Monaco Editor!");',
    language: 'javascript',
    theme: 'myCustomTheme', // Применение пользовательской темы
    readOnly: false,
    lineNumbers: 'on',
    fontSize: 16,
    minimap: { enabled: false },
    wordWrap: 'on',
    scrollBeyondLastLine: false,
    tabSize: 4
  });
});
