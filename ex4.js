// check if the index of the current value is equals to the index
// of the first apperance. If it is, it get filtered.

const getUniqueCharactersFromString = (array) => {
    return array.filter((e,i,a)=>{
        return i === a.indexOf(e)
    });
};

// Takes two arrays. Counts characters in the second array, against the first.
//Returns an array of objects, where objects have keys character and count
function countCharacters(countThese, countInThis) {
    const charCountArray = [];

    // run this for each unique character
    for (let i = 0; i < countThese.length; i++) {
        // temp object
        const characterObject = {};

        //Create obj key "character" and init count
        characterObject.character = countThese[i]
        let charCount = 0

        // Run through entire string, and count each occurence of current unique char
        for (let j = 0; j < countInThis.length; j++) {
            if (countInThis[j] === countThese[i]) charCount += 1
        }
        // complete char object, and input into final array
        characterObject.count = charCount;
        charCountArray[i] = characterObject;
    }
    return charCountArray
    // charCountArray= [{
    // character: "a",
    // count: 1}
    // ]
}

// Takes a string and returns an object with keys characters and lenght.
// Characters has value array of objects
function getCharacterFrequencies(str){
    // Block non-strings
    if (typeof str !== "string") return "Please input a string";

    // Split string into array for easier manipulation, and lowercase
    const stringArray = str.toLowerCase().split("");
    // Find lenght of string
    const stringLength = str.length;

    // Find all unique characters in string
    const uniqueChars = getUniqueCharactersFromString(stringArray).sort();

    // Count unique characters
    const characterArray = countCharacters(uniqueChars,stringArray);


    // Input main string length and character array in an object
     return {
      characters: characterArray,
      length: stringLength
    };
}

console.log(getCharacterFrequencies("abcdefghijklmnopqrstuvwxyz"));
