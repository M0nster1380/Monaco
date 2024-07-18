// myWorker.js

self.onmessage = function (e) {
  const { data } = e;
  const { id, method, params } = data;

  // Пример простой логики рабочего потока
  if (method === 'echo') {
    self.postMessage({ id, result: params });
  }

  // Добавьте другие методы по необходимости
};
