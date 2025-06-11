function getGrades(inputSelector) {
  // get grades from the input box
  // split them into an array (String.split(','))
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  // return grades
    const grades = document.querySelector("#grades").value
    let gradesArray = grades.split(",").map(grade => grade.trim().toUpperCase());
    return gradesArray;
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
    switch (grade) {
        case 'A':
        return 4.0;
        case 'B':
        return 3.0;
        case 'C':
        return 2.0;
        case 'D':
        return 1.0;
        case 'F':
        return 0.0;
        default:
        return null;
    }
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
  // calculates the GPA
  // return the GPA
    let totalPoints = 0;
    for (let grade of grades){
        let points = lookupGrade(grade);
        totalPoints += points;
    }
    let gpa = totalPoints / grades.length;
    return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  let output = document.querySelector(selector);
  output.innerHTML = `Your GPA is: ${gpa}`;
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  // calculate the gpa from the grades entered
  // display the gpa
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);