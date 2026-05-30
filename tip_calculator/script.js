const ten_percent_btn = document.getElementById("ten_percent");
const fifteen_percent_btn = document.getElementById("fifteen_percent");
const twenty_percent_btn = document.getElementById("twenty_percent");
const twenty_five_percent_btn = document.getElementById("twenty_five_percent");
let tip;

ten_percent_btn.addEventListener("click", function () {
  ten_percent_btn.classList.add("active");
  fifteen_percent_btn.classList.remove("active");
  twenty_percent_btn.classList.remove("active");
  twenty_five_percent_btn.classList.remove("active");
  tip = 10;
  console.log(tip);
});

fifteen_percent_btn.addEventListener("click", function () {
  ten_percent_btn.classList.remove("active");
  fifteen_percent_btn.classList.add("active");
  twenty_percent_btn.classList.remove("active");
  twenty_five_percent_btn.classList.remove("active");
  tip = 15;
  console.log(tip);
});

twenty_percent_btn.addEventListener("click", function () {
  ten_percent_btn.classList.remove("active");
  fifteen_percent_btn.classList.remove("active");
  twenty_percent_btn.classList.add("active");
  twenty_five_percent_btn.classList.remove("active");
  tip = 20;
  console.log(tip);
});

twenty_five_percent_btn.addEventListener("click", function () {
  ten_percent_btn.classList.remove("active");
  fifteen_percent_btn.classList.remove("active");
  twenty_percent_btn.classList.remove("active");
  twenty_five_percent_btn.classList.add("active");
  tip = 25;
  console.log(tip);
});
