const quiz_app = [
  {
    question: "CPU full form ?",
    options: [
      "Central Process Unit",
      "Central Processing Unit",
      "Computer Processing Unit",
      "Core Processing Unit",
    ],
    correct: 1,
  },
  {
    question: "Which data structure works on the principle of FIFO ?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correct: 1,
  },
  {
    question:
      "Which programming language is  primarily used for web page structure ?",
    options: ["Python", "Java", "HTML", "C++"],
    correct: 2,
  },
  {
    question: "What is the binary equivalent of decimal number 10 ?",
    options: ["1010", "1001", "1110", "1100"],
    correct: 0,
  },
  {
    question:
      "Which algorithm is commonly used for searching in a sorted array ?",
    options: [
      "Bubble sort",
      "Linear Search",
      "Binary Search",
      "Depth-First Search",
    ],
    correct: 2,
  },
];

const question_display = document.querySelector(".question_display");
const option_display = document.querySelector(".options");
const nextBtn = document.querySelector(".Next");
const restartBtn = document.querySelector(".restart");
let current_question = 0;
let score = 0;

function loadQuestion() {
  const current = quiz_app[current_question].question;
  const options = quiz_app[current_question].options;
  const correct_answer = quiz_app[current_question].correct;
  question_display.textContent = current;
  option_display.innerHTML = "";

  options.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<button class="select"> ${item}</button>`;
    option_display.append(li);

    const selectBtn = li.querySelector(".select");

    selectBtn.addEventListener("click", function () {
      const buttons = document.querySelectorAll(".options li button");
      if (index === correct_answer) {
        selectBtn.style.backgroundColor = "green";
        score += 1;
      } else {
        selectBtn.style.backgroundColor = "red";
        buttons[correct_answer].style.backgroundColor = "green";
      }

      buttons.forEach((button) => {
        button.disabled = true;
      });
    });
  });
}
loadQuestion();

nextBtn.addEventListener("click", function () {
  if (current_question >= quiz_app.length - 1) {
    this.remove();
    question_display.textContent = `Your score: ${score}`;
    option_display.innerHTML = "";
    return;
  }
  current_question = current_question + 1;
  loadQuestion();
});

restartBtn.addEventListener("click", function () {
  current_question = 0;
  score = 0;

  loadQuestion();
});
