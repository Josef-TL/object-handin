/*
Some IF stements, check if input is number
 */

function checkTemp(temp) {
    // Guard statements. I decide temp should be C, not F
    if (typeof temp !== "number") return "Wrong type";
    if (temp > 50) return "Are you sure the temperature is Celcius?";
    if (temp <= -20) return "Just stay inside";


    // Blasting down with IF statements. This can be varied, as long as largest temp is above.
    if (temp > 40){
        return "Welp, you're cooked.";
    } else if (temp > 30){
        return "Just be naked.";
    }else if (temp > 20){
        return "Shorts and a t-shirt";
    }else if (temp > 15){
        return "Trousers and a t-shirt";
    } else if (temp > 0){
        return "Long trousers, long sleves and maybe a thick jacket";
    } else if (temp > -10){
        return "Wooly underwear, long trousers and sleeves. Bring a winter jacket";
    } else if (tmep > -20){
        return "Just be naked.";
    }

}

const clothesToWear = checkTemp(18);
console.log(clothesToWear); // Logs out: "trousers and a t-shirt"