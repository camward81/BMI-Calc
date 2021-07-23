"use strict";

const calcButton = document.querySelector(".calc-btn");
let height = 0;
let weight = 0;

const bmiCalc = function (height, weight) {
  return Math.round((weight / (height * height)) * 703 * 100) / 100;
};

calcButton.addEventListener("click", function () {
  height = Number(document.querySelector(".height-input").value);
  console.log(height);

  weight = Number(document.querySelector(".weight-input").value);
  console.log(weight);

  const bmi = bmiCalc(height, weight);

  document.querySelector(".bmi-number").textContent = bmi;
  console.log(bmi);

  if (!height || !weight) {
    document.querySelector(".bmi-number").textContent =
      "Please input number(s)";
  }
});
