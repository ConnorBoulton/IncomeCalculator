let payInput = document.querySelector(".pay-input");
let hourInput = document.querySelector(".hours-input");
let minuteInput = document.querySelector(".minutes-input");
let totalSum = document.querySelector(".total-sum");
let totalTax = document.querySelector(".total-tax");
let totalProfit = document.querySelector(".total-profit");
let desiredAmount = document.querySelector(".desired-input");
let totalHoursNeeded = document.querySelector(".total-hours-needed");
let payInputDesired = document.querySelector(".pay-input-desired");

const submitBtn = document.querySelector(".submit-btn-pay");
const submitBtnDesired = document.querySelector(".submit-btn-desired");

const tax = 0.0495;

const calculate = (e) => {
  e.preventDefault();
  let oneMinute = +payInput.value / 60;
  let totalMinuteValue = oneMinute * +minuteInput.value;

  let sum = +payInput.value * +hourInput.value + totalMinuteValue;
  totalSum.innerHTML = `$${Math.round(sum * 100) / 100}`;

  let totalTaxValue = sum * tax;
  totalTax.innerHTML = `$${Math.round(totalTaxValue * 100) / 100}`;

  let totalProfitValue = sum - totalTaxValue;
  totalProfit.innerHTML = `$${Math.round(totalProfitValue * 100) / 100}`;
};

const calculateDesiredAmount = (e) => {
  e.preventDefault();

  let totalDesiredValue = +desiredAmount.value / +payInputDesired.value;
  totalHoursNeeded.innerHTML = `${totalDesiredValue}`;
};

submitBtnDesired.addEventListener("click", calculateDesiredAmount);

submitBtn.addEventListener("click", calculate);
