let calculation;
function setResult(resultCalculation) {
  document.getElementById("result").innerHTML = resultCalculation;
}
function setLocalStorage(calculation) {
  localStorage.setItem("calculation", calculation);
}
if (localStorage.getItem("calculation")) {
  calculation = localStorage.getItem("calculation");
  setResult(calculation);
} else {
  calculation = "";
}
function calculate(numberOrOperator) {
  calculation += numberOrOperator;
  setResult(calculation);
  setLocalStorage(calculation);
}
function calculateResult() {
  calculation = eval(calculation);
  setResult(calculation);
  setLocalStorage(calculation);
}
function resetCalculator() {
  calculation = "";
  setResult(calculation);
}
