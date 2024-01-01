// 2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.


let delay = 3

function generateRandonNumber() {
    let randomNumber = Math.random()
    console.log(`Generated Random Number: ${randomNumber}`);
}

function countDelay(){
    console.log(`Time remaing: ${delay} seconds`);

    if(delay === 3){
        delay--
        setTimeout(countDelay, 1000);
    }
    else{
        generateRandonNumber()
    }
}

// function call
countDelay()