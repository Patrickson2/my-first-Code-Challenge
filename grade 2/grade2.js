// the use of a function here is to prompt the user for input and return the speed
function speedCheck() {
    let speed = parseInt(prompt("Enter the speed of the car (km/s)"))
    return speed;
}
// Call speedCheck() to get the user input and store it in a variable
let speed = speedCheck()
// Maximum allowed speed
const speedLimit = 70; 
// Number of km per demerit point 
const kmPerDemerit = 5;
console.log(speed);

function checkSpeed(speed) {

    // // Checks the input is not a number and if not it displays the invalid input.
    if (isNaN(speed)) {
        return "Invalid Input! Please enter a Number";

        // checks If the speed is within the speed limit and returns an OK text.
    } else if (speed <= speedLimit) {
        return "OK";

        // // If the speed exceeds the speed limit it calculates the demerit points and checks if they are above 12 and returns a demerit digit per km.
    } else {
        let demeritPoints = parseInt((speed - speedLimit) / kmPerDemerit);
        // If demerit points are greater than 12 → license suspended
        if (demeritPoints > 12) {
            return "License suspended";
            // Otherwise, return the number of demerit points
        } else {
            return "The Demerit points are: " + demeritPoints;
        }
    }
}
// Call checkSpeed() with the entered speed and displays the results
console.log(checkSpeed(speed))