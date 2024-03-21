var num1 = '';
var num2 = '';
var operator = '';

function inputNumber(num) {
    if (operator == '') {
        num1 += num;
    } else {
        num2 += num;
    }
    document.getElementById('display').value = num1 + operator + num2;
}

function add() {
    operator = '+';
    document.getElementById('display').value = num1 + operator;
}

function subtract() {
    operator = '-';
    document.getElementById('display').value = num1 + operator;
}

function divide() {
    operator = '/';
    document.getElementById('display').value = num1 + operator;
}

function multiply() {
    operator = '*';
    document.getElementById('display').value = num1 + operator;
}

function calculate() {
    switch (operator) {
        case '+':
            document.getElementById('display').value = Number(num1) + Number(num2);
            break;
        case '-':
            document.getElementById('display').value = Number(num1) - Number(num2);
            break;
        case '/':
            if (num2 != 0) {
                document.getElementById('display').value = Number(num1) / Number(num2);
            } else {
                document.getElementById('display').value = 'Error: Division by zero is not allowed.';
            }
            break;
        case "*":
            document.getElementById('display').value = Number(num1) * Number(num2);
            break;
    }
    num1 = '';
    num2 = '';
    operator = '';
}

function clearDisplay() {
    num1 = '';
    num2 = '';
    operator = '';
    document.getElementById('display').value = '';
}
