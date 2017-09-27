//Caroline Holmes
//The set language allows language translation functions on the browser.

let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'is') {
        language = 'iceland'
    }
    else if (code === 'da') {
        language = 'danish'
    }
    else (code==='tu') {
        language = 'Telugu'
    }
    document.getElementById('language').innerHTML = language
}
