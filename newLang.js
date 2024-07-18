// newLang.js

import * as monaco from 'monaco-editor';
import MyWorker from './myWorker.js'; // Импорт пользовательского рабочего потока

// Регистрация пользовательского языка
monaco.languages.register({ id: 'myLang' });

monaco.languages.setMonarchTokensProvider('myLang', {
  tokenizer: {
    root: [
      [/\b(?:myCustomKeyword)\b/, 'keyword'],
      // Добавьте другие правила токенизации по необходимости
    ]
  }
});

// Создание экземпляра рабочего потока и его регистрация
const worker = new MyWorker();

monaco.languages.registerWorker('myLang', {
  id: 'myLang',
  label: 'My Custom Language Worker',
  worker: worker,
  create: () => ({
    getLanguageId: () => 'myLang',
    doSomething: (params) => {
      worker.postMessage({ method: 'echo', params });
    }
  })
});
