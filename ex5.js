function getNumberLength(num){
    return num.toString().length;

}
function formatCreditCardNumber(creditCardNumber){
    // Guard statements. The bottom should be changed if conversion happens in real time
    if (typeof creditCardNumber !== "number") return "Please enter a valid number";
    if (getNumberLength(creditCardNumber) < 9) return "Please enter a valid number";

    // Format number.
    // convert to string and slice
    const stringOfNumbers = creditCardNumber.toString();
    let firstFour = stringOfNumbers.slice(0,4);
    let middleFour = stringOfNumbers.slice(4,8);
    let lastFour = stringOfNumbers.slice(8);

    return {
        original: creditCardNumber,
        formatted: firstFour.concat(" ",middleFour, " ", lastFour)
    };
}

const formattedCreditCardObject = formatCreditCardNumber(12345678910);
console.log(formattedCreditCardObject);
