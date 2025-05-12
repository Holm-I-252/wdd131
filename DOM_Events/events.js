
function newTask() {
    // get the list element from the DOM
    // get the value entered into the #todo input
    // render out the list 
    let task = document.querySelector("#todo").value;
    let listElement = document.querySelector("#todoList");

    listElement.innerHTML += `
    <li> ${task}
    <div>
    <span data-function="delete">❎</span>
    <span data-function="complete">✅</span>
    </div>
    </li>`

}

function manageTasks(e) {
    // using the event find the li element closest to what they clicked
    const parent = e.target.closest("li");
    // did they click the delete or complete icon?
    if (e.target.getAttribute('data-function') === "delete") {
        parent.remove();
    }
    if (e.target.getAttribute('data-function') === "complete") {
        parent.classList.toggle('strike');
    }
}

document.getElementById("submitTask").addEventListener("click", newTask);

document.querySelector("#todoList").addEventListener("click", manageTasks);