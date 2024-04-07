const { translate } = require('free-translate');

(async () => {
  const translatedText = await translate('Hello World', { from: 'en', to: 'ja' });

  console.log(translatedText); // こんにちは世界
})();