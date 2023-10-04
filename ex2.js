function rollTheDice(num){

    for (let i = 0; i < num; i++) {
        //Random number between 1 and 6:
        let diceRoll = Math.ceil(Math.random()*6);
        // Check if the dice roll is 6
        if (diceRoll === 6){
            console.log("You just hit 6!")
        }
    }
}

// Better function, added stuff
function rollTheDiceAlt(num) {
    // init dice rolls
    const diceRolls = [];

    // populate dice rolls with random numbers
    for (let i = 0; i < num; i++) {
        diceRolls[i] = Math.ceil(Math.random()*6);

    }

    // Check if diceRolls contains only 6
    const onlySixes = diceRolls.every((e) => e === 6);
    if (onlySixes) return console.log("Jackpot");

    // Log out, every time array contains 6
    for (const e in diceRolls) {
        if (diceRolls[e] === 6) {
            console.log("You just hit 6")
        }
    }

}

rollTheDiceAlt(10);

// This means roll the dice 3 times. 6 is hit once
rollTheDice(3);
// You just hit 6

// The dice is rolled 5 times with 2 hits
rollTheDice(5);
// You just hit 6
// You just hit 6

// Here the user rolls 5 times but does not hit 6 even once
rollTheDice(5);