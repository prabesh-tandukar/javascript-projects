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

  for (const item of data) {
    html += `<tr> <td> ${item.date} </td> <td> ${item.exercise_name} </td> <td> ${item.sets} </td> <td> ${item.reps} </td> <td> ${item.weight} </td> <td><button>Delete</button></td></tr>`;
  }
  display.innerHTML = html;
}

function addEntry() {
  let exercise_name = document.getElementById("exercise_name").value;
  let sets = document.getElementById("sets").value;
  let reps = document.getElementById("reps").value;
  let weight = document.getElementById("weight").value;
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

  exercise_name = "";
}

entry_btn.addEventListener("click", addEntry);
displayEntries();
