// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
    sections:  [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'}, { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
    changeStudents: (sectionNum, addOrDrop) => {
        let section = aCourse.sections.find(s => s.sectionNum === sectionNum);
        if (section) {
            if (addOrDrop === "add") {
                section.enrolled += 1;
                console.log(`Added a student to section ${sectionNum}. Total enrolled: ${section.enrolled}`);
            } else if (addOrDrop === "drop") {
                if (section.enrolled > 0) {
                    section.enrolled -= 1;
                    console.log(`Dropped a student from section ${sectionNum}. Total enrolled: ${section.enrolled}`);
                } 
        } else {
            console.log(`Section ${sectionNum} not found.`);
        }
        }}
};

function updateHTML(course) {
    let courseName = document.querySelector("#courseName");
    let courseCode = document.querySelector("#courseCode");
    courseName.innerHTML = course.name;
    courseCode.innerHTML = course.code;

}

function updateHTMLSections(section) {
    return `<tr><td>${section.sectionNum}</td><td>${section.roomNum}</td><td>${section.enrolled}</td><td>${section.days}</td><td>${section.instructor}</td></tr>`;
}

function renderSections(sections) {
    let html = sections.map(updateHTMLSections).join("");
    let sectionTable = document.querySelector("#sections");
    sectionTable.innerHTML = html;
}
updateHTML(aCourse);
renderSections(aCourse.sections);
document.getElementById("enrollStudent").addEventListener("click", () => {
    let sectionNum = parseInt(document.querySelector("#sectionNumber").value);
    aCourse.changeStudents(sectionNum, "add");
    renderSections(aCourse.sections);
});
document.getElementById("dropStudent").addEventListener("click", () => {
    sectionNum = parseInt(document.querySelector("#sectionNumber").value);
    aCourse.changeStudents(sectionNum, "drop"); 
    renderSections(aCourse.sections);
}); 