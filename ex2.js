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
// USE THIS ONE!!!!
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
        if (diceRolls[e] === 6) console.log("You just hit 6");
    }
}

rollTheDice(5)
rollTheDiceAlt(2);
