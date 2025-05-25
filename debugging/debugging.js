
const PI = 3.14;
let area = 0;
function circleArea(radius) {
    area = radius * PI;
    return area;
}
// debugger;
area = circleArea(3);
console.log(area);
area = circleArea(4);
console.log(area);
console.log("Ian Holm")