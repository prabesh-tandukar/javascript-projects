let entry_btn = document.querySelector(".entry");

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
}

entry_btn.addEventListener("click", addEntry);
