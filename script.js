var memory = 0;

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  var currentDisplay = document.getElementById("display").value;
  document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function updateDisplay(value) {
  document.getElementById("display").value = value;
}

function calculateResult() {
  var expression = document.getElementById("display").value;
  try {
    var result = eval(expression);
    updateDisplay(result);
  } catch (error) {
    updateDisplay("Error");
  }
}

function calculateSquareRoot() {
  var number = parseFloat(document.getElementById("display").value);
  if (!isNaN(number) && number >= 0) {
    updateDisplay(Math.sqrt(number));
  } else {
    updateDisplay("Error");
  }
}

function calculatePercentage() {
  var expression = document.getElementById("display").value;
  try {
    var result = eval(expression + "/100");
    updateDisplay(result);
  } catch (error) {
    updateDisplay("Error");
  }
}

function calculateSquare() {
  var number = parseFloat(document.getElementById("display").value);
  if (!isNaN(number)) {
    updateDisplay(Math.pow(number, 2));
  }
}

function calculateCube() {
  var number = parseFloat(document.getElementById("display").value);
  if (!isNaN(number)) {
    updateDisplay(Math.pow(number, 3));
  }
}

function toggleSign() {
  var currentDisplay = parseFloat(document.getElementById("display").value);
  if (!isNaN(currentDisplay)) {
    updateDisplay(-currentDisplay);
  }
}

