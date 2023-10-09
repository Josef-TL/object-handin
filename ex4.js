// check if the index of the current value is equals to the index
// of the first apperance.

const getUniqueCharactersFromString = (array) => {
    return array.filter((e,i,a)=>{
        return i === a.indexOf(e)
    });
};


function getCharacterFrequencies(str){
    // Block non-strings
    if (typeof str !== "string") return "Please input a string";

    // Split string into array for easier manipulation, and lowercase
    const stringArray = str.toLowerCase().split("");
    // Find lenght of string
    const stringLength = str.length;

    // Find all unique characters in string
    const uniqueChars = getUniqueCharactersFromString(stringArray).sort();
    const characterArray = [];

    // run this for each unique character
    for (let i = 0; i < uniqueChars.length; i++) {
        // temp object
        const characterObject = {};

        //Create obj key "character" and init count
        characterObject.character = uniqueChars[i]
        let charCount = 0

        // Run through entire string, and count each occurence of current unique char
        for (let j = 0; j < stringArray.length; j++) {
            if (stringArray[j] === uniqueChars[i]) charCount += 1
        }
        // complete char object, and input into final array
        characterObject.count = charCount;
        characterArray[i] = characterObject;
    }


    // Input main string length and character array in an object
     return {
      characters: characterArray,
      length: stringLength
    };
}

console.log(getCharacterFrequencies("abcdefghijklmnopqrstuvwxyz"));
