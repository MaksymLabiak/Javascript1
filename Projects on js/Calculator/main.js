function clearDisplay() {
    document.forms[0].display.value = '';
}

function deleteChar() {
    let currentDisplay = document.forms[0].display.value;
    document.forms[0].display.value = currentDisplay.substring(0, currentDisplay.length - 1);
}

function appendChar(char) {
    document.forms[0].display.value += char;
}

function calculate() {
    try {
        document.forms[0].display.value = eval(document.forms[0].display.value);
    } catch (error) {
        document.forms[0].display.value = 'Error';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.value;
            if (value === 'AC') {
                clearDisplay();
            } else if (value === 'DE') {
                deleteChar();
            } else if (value === '=') {
                calculate();
            } else {
                appendChar(value);
            }
        });
    });
});
