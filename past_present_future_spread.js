//sets deck variable
let deck = [];
//resetting deck from previous readings
const setDeck = () =>{
    deck = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "The Wheel Of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"]
}

//function to get card from deck and removes the selected card from the array of possible cards
const getCard = () => {
    let roll = Math.floor(Math.random()*deck.length);
    let card = deck[roll]
    deck.splice(roll,1)
    return card;
}

//shuffles deck to make sure that there aren't any undefined cards
    setDeck();
    //calls getCard function to get card for each variable
    let past = getCard();
    let present = getCard();
    let future = getCard();
    //logs output to terminal
    console.log(`Your past card is ${past}, your present card is ${present}, and your future card is ${future}.`);