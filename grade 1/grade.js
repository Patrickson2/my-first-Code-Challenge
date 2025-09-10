// Prompt the user to enter student marks and convert the input to an intege
let marks = parseInt(prompt("Enter Student Marks:"));

// Check if the input is not a number and alert the user an invalid input.
if (isNaN(marks) ) {
    alert("Invalid Input! Please enter a number between 0 and 100.");
} else {
    // Declare a variable to store the grad
    let grade;
    
    // Check if marks are between 79 and 100 to be Grade A
if (marks >= 79 && marks <= 100) {
        grade = "A";
        // Check if marks are between 60 and 79 to be Grade B

    } else if (marks <79 && marks >= 60){
        grade = "B";

        // Check if marks are between 49 and 59 to be Grade C
    } else if (marks <59 && marks >= 49){
        grade = "C";

        // Check if marks are between 40 and 49 to be Grade D
    } else if (marks <49 && marks >= 40) {
        grade = "D";

        // Check if marks are between 0 and 40 to be Grade E
    } else if (marks <40 && marks >= 0){
        grade = "E";

    }

// Display the grade to the user
    alert("The Grade is: " + grade);
} 
