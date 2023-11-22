
let DisplayValue = "";

function appendToDisplay(value) {
    DisplayValue += value;
    updateDisplay();
}

function clearDisplay() {
    DisplayValue = "";
    updateDisplay();
}

function calculate() {
    try {
        DisplayValue = eval(DisplayValue);
        updateDisplay();
    } catch (error) {
        DisplayValue = "Error";
        updateDisplay();
    }
}

function removeLastLetter() {
    DisplayValue = DisplayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = DisplayValue;
}
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
       
        appendToDisplay(key);
    } else if (key === "Enter") {
        
        calculate();
    } else if (key === "Backspace") {
    
        removeLastLetter();
    }
});
