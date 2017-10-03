let language = 'English'
let languageCode = 'en'
let jsonData


const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language

    //clear form:
    getData()
}

const clearData = () => {
    const element = document.getElementById('results')
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

//Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
const getData = () => {

    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let div
            let textNode

            // output statuses:
            console.log(json.statuses)

            // clear out existing tweets:
            clearData()

            // ---------------------- TASK 1 -----------------------------------
            // 1. Write a function called 'reverseText' that takes a single string as an input. It should return that string with all characters reversed
            // e.g., 'Hello, world' will return 'dlrow ,olleH'
            // You can test this in the browser by updating the forEach function to reverse every tweet's text
            // HINT: This is a common interview question to screen out javascript devs who don't understand the language's native functions. Google around - you might find a good solution for this problem
            // Once you've written your reverse text function, write a comment describing how it works.

            // ---------------------- TASK 2 -----------------------------------
            // 2. Now, write a function called 'reverseTweet' that takes a single string as an input. If the string contains a hashtag (#), it should return the string.
            // If it doesn't contain a hashtag, it should return the string with all characters reversed
            // Update the forEach function so that it reverses tweets that don't have hashtags
            // HINT: Strings have a useful function called indexOf that you may find useful: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
            // HINT: You already have a reverseText function laying around...

            // ---------------------- DELIVERABLE -----------------------------------
            // When somebody searches for a keyword, tweets with hashtags will appear as normal. Tweets with no hashtags will be inexplicably reversed.
            // EXTRA CREDIT: Add a class to reversed tweets to make their background red. This will require modifying the existing CSS!

            json.statuses.forEach((status) => {
                div = document.createElement('div')
                div.className = 'tweet'
                textNode = document.createTextNode(status.text)
                div.appendChild(textNode)
                document.getElementById('results').appendChild(div)
            })

        })
}
const reverseText = (text) => {
    return text.split('').reverse().join('');
}
const reverseTweet = (tweetText)=> {
  if(tweetText.indexOf('#')=== -1) {return reverseText(tweetText)
  }
else {return tweetText
}

//if has # return normal tweetText otherwise tweet is reversed text
