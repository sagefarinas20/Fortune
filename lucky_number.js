//function to generate 6 random numbers
const generateLuckyNumber = () => {
    //array to store the 6 random numbers
    let luckyArray = [];
    //used to create a range of numbers to select from in for loop
    const luckyRange = 40;
    //makes sure the luckyArray only holds 6 numbers
        for (let i=0; i<6; ++i){
            //randomly generates a number by multiplying Math.random by previously defined luckyRange variable
            luckyArray.push(Math.floor(Math.random() * luckyRange))
        }
        //returns completed luckyArray
        return luckyArray;
    };
    //logs completed array with preamble message
console.log(`Your lucky numbers are ${generateLuckyNumber()}.`)

