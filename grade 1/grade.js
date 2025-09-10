// the use of a function here is to prompt the user for input and return the marks
function calculateGrade() {
    // Prompt the user to enter student marks
    let Marks = parseInt(prompt("Enter Student Marks:"))
    
    return Marks;
}

// Call calculateGrade() to get the marks
let Marks = calculateGrade()
console.log(Marks); // this prints the value of Marks to the console.
function determineGrade(Marks) {
        // If input is not a number, return an error message.
    if (isNaN(Marks)) {
        return "Invalid Input! Please enter a number between 0 and 100";

        // Check ranges and returns the correct grade
    }else if (Marks >= 79 && Marks <= 100) {
        return "A";
    } else if (Marks >= 60 && Marks < 79) {
        return "B";
    } else if (Marks  >= 49 && Marks < 59) {
        return "C";
    } else if (Marks >= 40 && Marks < 49) {
        return "D";
    } else if (Marks >= 0 && Marks < 40) {
        return "E";
    }

}
// Call determineGrade() with the Marks entered by the user and outputs grade
console.log(determineGrade(Marks))