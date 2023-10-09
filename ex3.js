const positiveWordsList = ["happy", "awesome", "super", "love"];
const negativeWordsList = ["bad", "angry", "hate", "dead"]

// Filter function
function getFilteredString(stringToBeFiltered, matchThisList){
    let result = [];

    for (const i in matchThisList) {
        // Concatenating filtered array to result.
        result = result.concat( stringToBeFiltered.filter(
            // Filters thorugh my predefined words i see as positive or negative, each word that match gets pushed
            (el) => el.includes(matchThisList[i])
        ));
    }
    return result
}



function getSentimentScore(str){
    // If str is not string, dont run
    if(typeof str !== "string") return "Please input a string";

    // make an array, else the filter function wont work.
    let splitString = [""];

    // split the string
    // check if str has spaces
    if (str.includes(" ")){
        splitString = str.split(" ")
    } else {splitString.push(str)}


    // Filter the split array against a "positive" and "negative" word list.
    const positiveWords = getFilteredString(splitString, positiveWordsList);
    const negativeWords = getFilteredString(splitString, negativeWordsList);

    // score is calculated; length of positive array minus length of negative
    const wordScore = positiveWords.length - negativeWords.length;

    // values is returned as an object
    return {
        score: wordScore,
        positiveWords: positiveWords,
        negativeWords: negativeWords
    };

}

// call the function and log it
// The functions counts words, even with no spaces. It cannot print the correct words, but gives a score.
console.log(getSentimentScore('Dead inside.'));
console.log(getSentimentScore('I am mega super awesome happy'));
console.log(getSentimentScore('I am mega superawesomehappy'));



