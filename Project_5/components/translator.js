const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

  americanToBritish(string) {
    let translatedString;
    
    const AmericanOnlyDict = new RegExp(Object.keys(americanOnly).join("\\b|\\b"), 'g')
    translatedString = string.replace(AmericanOnlyDict, matched => `<span class="highlight">${americanOnly[matched]}</span>`)
    
    const amToBritSpellingDict = new RegExp(Object.keys(americanToBritishSpelling).join("\\b|\\b"), 'g')
    translatedString = translatedString.replace(amToBritSpellingDict, matched => `<span class="highlight">${americanToBritishSpelling[matched]}</span>`)
    
    const amToBritTitlesDict = new RegExp(Object.keys(americanToBritishTitles).join("|"))
    translatedString = translatedString.replace(amToBritTitlesDict, matched => `<span class="highlight">${americanToBritishTitles[matched]}</span>`)
    
    const amToBritTime = /[0-9]{2}:[0-9]{2}/g
    translatedString = translatedString.replace(amToBritTime, matched => `<span class="highlight">${matched[0]}${matched[1]}.${matched[3]}${matched[4]}</span>`)
    
    return translatedString
    }
  

  britishToAmerican(string) {
    let translatedString;
    
    const britishOnlyDict = new RegExp(Object.keys(britishOnly).join("\\b|\\b"), 'g')
    translatedString = string.replace(britishOnlyDict, matched => `<span class="highlight">${britishOnly[matched]}</span>`)

    const britToAmTime = /[0-9]{2}.[0-9]{2}/g
    translatedString = translatedString.replaceAll(britToAmTime, matched => `<span class="highlight">${matched[0]}${matched[1]}:${matched[3]}${matched[4]}</span>`)

    const britToAmSpellingDict = new RegExp(Object.values(americanToBritishSpelling).join("\\b|\\b"), 'g')
    translatedString = translatedString.replace(britToAmSpellingDict, matched => `<span class="highlight">${this.getKeyByValue(americanToBritishSpelling, matched)}</span>`)

    const britToAmTitleDict = new RegExp(Object.values(americanToBritishTitles).join("|"))
    translatedString = translatedString.replace(britToAmTitleDict, matched => `<span class="highlight">${this.getKeyByValue(americanToBritishTitles, matched)}</span>`)
    
    return translatedString
  }
}

module.exports = Translator;
