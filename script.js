if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Service Worker registrado exitosamente', reg))
    .catch(err => console.warn('Hay un error al tratar de registrar el Service Worker', err))
}