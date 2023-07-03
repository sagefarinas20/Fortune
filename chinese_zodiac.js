//calculates the chinese zodiac animal for the year input
const calculateZodiac = (year) => {
    switch ((year - 4) % 12) {
        case 0:
            return 'Rat';
        case 1:
            return 'Ox';
        case 2: 
            return 'Tiger';
        case 3:
            return 'Rabbit';
        case 4:
            return 'Dragon';
        case 5:
            return 'Snake';
        case 6:
            return 'Horse';
        case 7:
            return 'Sheep';
        case 8:
            return 'Monkey';
        case 9:
            return 'Rooster';
        case 10:
            return 'Dog';
        case 11:
            return 'Pig';
        default:
            return 'Please input valid year.'
    }
}
//compares birth year zodiac animal to current year zodiac animal
const finalCalculation = (birthYear, currentYear) => {
    if (calculateZodiac(birthYear) === calculateZodiac(currentYear)) {
        return true;
    } else {
        return false;
    }
}
//calling the formula for comparison and printing the result- adjust manually
console.log(finalCalculation(1998, 2023));
