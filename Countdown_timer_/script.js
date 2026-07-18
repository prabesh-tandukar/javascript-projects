let interval_id;
let input = document.getElementById("time");
const start_btn = document.querySelector(".start_btn");
const reset_btn = document.querySelector(".reset_btn");
const display_area = document.querySelector(".display");

function startTimer() {
  const input_value = input.value;
  let input_minutes = Number(input_value);
  let total_seconds = input_minutes * 60;
  let time_left = total_seconds;

  if (!input_minutes) {
    return;
  }

  clearInterval(interval_id);

  interval_id = setInterval(() => {
    --time_left;

    display_area.textContent = ` ${Math.floor(time_left / 60)
      .toString()
      .padStart(2, "0")} :: ${(time_left % 60).toString().padStart(2, "0")}`;
    if (time_left === 0) {
      display_area.textContent = "Time's up!";
      clearInterval(interval_id);
    }
  }, 1000);
}

start_btn.addEventListener("click", startTimer);

function resetTimer() {
  clearInterval(interval_id);
  input.value = "";
  display_area.textContent = `MM :: SS`;
}

reset_btn.addEventListener("click", resetTimer);
