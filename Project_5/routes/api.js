'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      if (req.body.text === undefined || !req.body.locale) {
        return res.json({ error: 'Required field(s) missing' })
      }

      if (req.body.text === "") {
        return res.json({ error: 'No text to translate' })
      }

      if (req.body.locale !== "american-to-british" && req.body.locale !== "british-to-american") {
        return res.json({ error: 'Invalid value for locale field' })
      }
      
      if (req.body.locale === 'american-to-british') {
        const translation = translator.americanToBritish(req.body.text)
        if (translation === req.body.text) {
          return res.json({text: req.body.text, translation: "Everything looks good to me!"})
        } else {
        return res.json({text: req.body.text, translation: translation})
        }
      }

      if (req.body.locale === 'british-to-american') {
        const translation = translator.britishToAmerican(req.body.text)
        if (translation === req.body.text) {
          return res.json({text: req.body.text, translation:"Everything looks good to me!"})
        } else {
        return res.json({text: req.body.text, translation: translation})
        }
      }

    });
};
