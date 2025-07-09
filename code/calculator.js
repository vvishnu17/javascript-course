let calculation = "";
function calculate(numberOrOperator) {
  calculation += numberOrOperator;
  document.getElementById("result").innerHTML = calculation;
}
function calculateResult() {
  calculation = eval(calculation);
  document.getElementById("result").innerHTML = calculation;
}
function resetCalculator() {
  calculation = "";
  document.getElementById("result").innerHTML = calculation;
}
