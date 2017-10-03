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
            // 1. Create a new variable called tweetsWithHashtags
            // 2. Call the 'filter' function on the json.statuses array. The filter function returns an array, so you can assign it `tweetsWithHashtags`. Read more about filter here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            // 3. Write an anonymous function that checks each tweet's text, and filters out tweets that do NOT have hashtags.
            // 4. Update the forEach function so that it runs on the new tweetsWithHashtags array

            // ---------------------- DELIVERABLE -----------------------------------
            // When somebody searches for a tweet, they will only see tweets that contain hashtags.

tweetsWithHashtags = statuses.text.filter(function(status) {
  return status.text.indexOf('#') >=0

            tweetsWithHashtags.forEach((status) => {
                div = document.createElement('div')
                div.className = 'tweet'

                textNode = document.createTextNodereverse(status.text)
                div.appendChild(textNode)
                document.getElementById('results').appendChild(div)
            })

        })
}
