
function checkSpeed(speed, speedLimit, kmPerDemerit) {

    // // Checks the input is not a number and if not it displays the invalid input.
    if (isNaN(speed)) {
        return "Invalid Input! Please enter a Number";

        // checks If the speed is within the speed limit and returns an OK text.
    } else if (speed <= speedLimit) {
        return "OK";

        // // If the speed exceeds the speed limit it calculates the demerit points and checks if they are above 12 and returns a demerit digit per km.
    } else {
        let demeritPoints = parseInt((speed - speedLimit) / kmPerDemerit);

        // checks if the demerit points are above 12 and returning license suspended.
        if (demeritPoints > 12) {
            return "License suspended";

            // returns the demerit points if they are below 12.
        } else {
            return "The Demerit points are: " + demeritPoints;
        }
    }
}
// Prompts the user to enter the speed of the car and calls the checkSpeed function with the speed limit and km per demerit values.
let speed = parseInt(prompt("Enter the speed of the car (km/s)"))

// Shows the speed limit.
const speedLimit = 70;

// shows the number of kilometers per demerit point.
const kmPerDemerit = 5;

// Displays the result of the checkSpeed function in an alert box.
alert(checkSpeed(speed, speedLimit, kmPerDemerit))