var addTaskBtn = document.querySelector("#addTaskBtn");
var inputBox = document.querySelector("#inputBox");
var todoList = document.querySelector("#todoList");
const today = document.querySelector("#today");
const image = document.querySelector("#image");
var edittodothis;

const date = new Date();
today.innerHTML = date.toDateString();

const editTodo = (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
    }

    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousSibling.innerHTML;
        inputBox.focus();
        addTaskBtn.innerHTML = "Update";
        edittodothis = e;
    }
}


function todoMain() {

    var inputText = inputBox.value;

    if (inputText.length <= 0) {
        alert("Please add some task before adding.")
        return false;
    }

    if (addTaskBtn.innerHTML === "Update") {
        edittodothis.target.previousSibling.innerHTML = inputBox.value;
        addTaskBtn.innerHTML = "Add";
        inputBox.value = "";
    } else {
        image.remove();

        var newTaskli = document.createElement("li");

        const newTaskP = document.createElement("p");
        newTaskP.classList.add("todoTask");

        const editTask = document.createElement("p");
        editTask.innerHTML = "Edit";
        editTask.classList.add("editTask");

        const removeTask = document.createElement("p");
        removeTask.innerHTML = "Remove";
        removeTask.classList.add("removeTask");

        newTaskP.innerHTML = inputText;

        newTaskli.appendChild(newTaskP);
        newTaskli.appendChild(editTask);
        newTaskli.appendChild(removeTask);

        todoList.appendChild(newTaskli);

        inputBox.value = "";

        newTaskP.addEventListener("click", () => {
            newTaskP.classList.add("textStrike");
        })
    }
};

todoList.addEventListener("click", editTodo);

addTaskBtn.addEventListener("click", todoMain);
document.body.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        todoMain();
    }
});