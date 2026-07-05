let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}
function toggleMode() {
  document.body.classList.toggle("dark");
}
document.addEventListener("keydown", function(e) {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  }
});