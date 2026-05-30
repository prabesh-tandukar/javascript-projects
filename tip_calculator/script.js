let tip;
const tip_btn = document.querySelectorAll(".tip_btn");
const bill_value = document.getElementById("total");
const people_num = document.getElementById("people");
const tip_person_dis = document.querySelector(".tip_per_person");
const total_person_dis = document.querySelector(".total_per_person");
const total_with_tips = document.querySelector(".total_with_tips");
const calculate_btn = document.querySelector(".calculate");

tip_btn.forEach((element) => {
  element.addEventListener("click", () => {
    tip_btn.forEach((ele) => {
      ele.classList.remove("active");
    });
    element.classList.add("active");
    tip = Number(element.dataset.tip);
  });
});

function calculate() {
  const bill_amount = Number(bill_value.value);
  const people = Number(people_num.value);

  if (!bill_amount) {
    return;
  } else if (!people) {
    return;
  } else if (!tip) {
    return;
  } else {
    const tip_amount = bill_amount * (tip / 100);
    const total_amount = bill_amount + tip_amount;
    const tip_per_person = tip_amount / people;
    const total_per_person = total_amount / people;
    total_with_tips.textContent = `Total amount with tips: ${total_amount.toFixed(2)}`;
    tip_person_dis.textContent = `Tips per person: ${tip_per_person.toFixed(2)}`;
    total_person_dis.textContent = `Total per person: ${total_per_person.toFixed(2)}`;
  }
}

calculate_btn.addEventListener("click", calculate);
