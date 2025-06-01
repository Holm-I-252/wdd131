//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate).join("");
document.querySelector("#myList").innerHTML = stepsHtml;

let letters = ["a", "b", "c", "a"];
gpa = []
function calculateGPA(letter) {
  if (letter === "a") {
    gpa.push(4.0);
    return "<li>4.0</li>";
  } else if (letter === "b") {
    gpa.push(3.0);
    return "<li>3.0</li>";
  } else if (letter === "c") {
    gpa.push(2.0);
    return "<li>2.0</li>";
  } else if (letter === "d") {
    gpa.push(1.0);
    return "<li>1.0</li>";
  } else {
    gpa.push(0.0);
    return "<li>0.0</li>";
  }
}
const gpaHtml = letters.map(calculateGPA).join("");
document.querySelector("#gpaList").innerHTML = gpaHtml
document.querySelector("#gpaAverage").innerHTML = `GPA: ${gpa.reduce((a, b) => a + b, 0) / gpa.length}`;

fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

lessThanSix = fruit.filter(fruit => fruit.length < 6);
document.querySelector("#shortFruit").innerHTML = lessThanSix.map(fruit => `<li>${fruit}</li>`).join("");

let numbers = [12, 34, 21, 54]
let luckyNumber = 21
let luckyIndex = numbers.indexOf(luckyNumber);
document.querySelector("#num").innerHTML = `Lucky number ${luckyNumber} is at index ${luckyIndex} in the array.`;