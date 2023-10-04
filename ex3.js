const positiveWordsList = ["happy", "awesome", "super"];
const negativeWordsList = ["bad"]

// Filter function
function getFilteredString(stringToBeFiltered, matchThisList){
    let result = [];

    for (const i in matchThisList) {
        // Pushing filtered array to positiveWords
        result = stringToBeFiltered.filter(
            // Filters thorugh my predefined words i see as positive, each word that match gets pushed
            (el) => el.includes(matchThisList[i])
        );
    }
    return result
}



function getSentimentScore(str){
    let splitString = [""];

    // split the string, i get an array
    // check if str has spaces
    if (str.includes(" ")){
        splitString = str.split(" ")
    } else {splitString = str}


    // Filter the split array against a "positive" word list
    const positiveWords = getFilteredString(splitString,positiveWordsList);



    console.log(positiveWords);

    // Filter the split array against a "negative" word list
    // score is calculated; length of positive array minus length of negative
    // values is pushed into an object

}


const sentimentScoreObject = getSentimentScore('I am mega super awesome happy happy');

console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/