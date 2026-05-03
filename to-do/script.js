const submitBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
const inputField = document.getElementById("taskInput");

function eventTask() {
  let task = inputField.value;

  if (task.trim() === "") {
    return;
  }
  let liElement = document.createElement("li");
  liElement.innerHTML = ` ${task} <button class="doneBtn" > Done </button> <button class="deleteBtn" > Delete </button>`;
  taskList.append(liElement);

  const doneBtn = liElement.querySelector(".doneBtn");
  const deleteBtn = liElement.querySelector(".deleteBtn");

  deleteBtn.addEventListener("click", function () {
    liElement.remove();
  });

  doneBtn.addEventListener("click", function () {
    liElement.classList.toggle("done");
  });

  inputField.value = "";
}

submitBtn.addEventListener("click", eventTask);
inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    eventTask();
  }
});
