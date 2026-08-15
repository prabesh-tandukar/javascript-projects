let entry_btn = document.querySelector(".entry");
let display = document.querySelector(".display");

function displayEntries() {
  let data = localStorage.getItem("workouts");
  if (!data) {
    return;
  }
  data = JSON.parse(data);
  console.log(data);
  let html = "";

  data.forEach((item, index) => {
    html += `<tr> 
    <td> ${item.date} </td> 
    <td> ${item.exercise_name} </td> 
    <td> ${item.sets} </td> 
    <td> ${item.reps} </td> 
    <td> ${item.weight} </td> 
    <td><button class="delete_btn" data_index="${index}">Delete</button></td>
    </tr>`;
  });
  display.innerHTML = html;

  const delete_buttons = display.querySelectorAll(".delete_btn");
  delete_buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const index = Number(this.dataset.index);
      const entries = localStorage.getItem("workouts");
      const array = JSON.parse(entries);
      array.splice(index, 1);
      localStorage.setItem("workouts", JSON.stringify(array));
      displayEntries();
    });
  });
}

function addEntry() {
  const exe_name_input = document.getElementById("exercise_name");
  const sets_input = document.getElementById("sets");
  const reps_input = document.getElementById("reps");
  const weight_input = document.getElementById("weight");

  let exercise_name = exe_name_input.value;
  let sets = sets_input.value;
  let reps = reps_input.value;
  let weight = weight_input.value;
  if (!exercise_name || !sets || !reps || !weight) {
    return;
  }
  let workout = {
    date: new Date().toLocaleDateString(),
    exercise_name: exercise_name,
    sets: Number(sets),
    reps: Number(reps),
    weight: Number(weight),
  };

  let entries = localStorage.getItem("workouts");
  const array = entries ? JSON.parse(entries) : [];

  array.push(workout);

  localStorage.setItem("workouts", JSON.stringify(array));

  console.log(array);

  displayEntries();

  exe_name_input.value = "";
  sets_input.value = "";
  reps_input.value = "";
  weight_input.value = "";
}

entry_btn.addEventListener("click", addEntry);
displayEntries();
