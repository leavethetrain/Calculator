let currentnumber = 0;
let previousInput = 0;
let operator = "+";
let list = "";
console.log(list);

function number(zahl) {
  currentnumber = currentnumber * 10 + zahl;
  console.log(currentnumber);
  updateCurrentInput(currentnumber);
}

function clear() {
  console.log("test");
  currentnumber = 0;
  previousInput = 0;
  operator = "+";
  list = "";
  updateCurrentInput(currentnumber);
  updatePreviousInput(previousInput);
  paragraph();
}

function add() {
  performOperator();
  operator = "+";
  updatePreviousInput(previousInput + operator);
}

function substract() {
  performOperator();
  operator = "-";
  updatePreviousInput(previousInput + operator);
}

function multiply() {
  performOperator();
  operator = "*";
  updatePreviousInput(previousInput + operator);
}

function divide() {
  performOperator();
  operator = "/";
  updatePreviousInput(previousInput + operator);
}
function result() {
  performOperator();
  operator = "=";
  updatePreviousInput(previousInput + operator);
  updateCurrentInput(previousInput);
}

function updateCurrentInput(text) {
  document.getElementById("eingabe").innerHTML = text;
}

function updatePreviousInput(text) {
  document.getElementById("zwischenstand").innerHTML = text;
}

function paragraph() {
  document.getElementById("list").innerHTML = list;
}

function performOperator() {
  let currentResult = 0;
  if (operator === "+") {
    currentResult = previousInput + currentnumber;
  } else if (operator === "-") {
    currentResult = previousInput - currentnumber;
  } else if (operator === "*") {
    currentResult = previousInput * currentnumber;
  } else if (operator === "/") {
    currentResult = previousInput / currentnumber;
  }

  if (operator !== "=") {
    let listString =
      "<p>" +
      previousInput +
      operator +
      currentnumber +
      "=" +
      currentResult +
      "</p>";
    list = listString + list;
    paragraph();
    previousInput = currentResult;
  }

  currentnumber = 0;

  updateCurrentInput(currentnumber);
}
