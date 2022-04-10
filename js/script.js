'use strict';

mathExpression();
function mathExpression(firstNum, secondNum, action) {
    firstNum = +prompt('Введите первое число');
    if(isNaN(firstNum) || firstNum === 0) {
        return  alert('Ошибка');
    }
    secondNum = +prompt('Введите второе число');
    if(isNaN(secondNum) || secondNum === 0) {
        return  alert('Ошибка');
    }
    action = prompt('Введите необходимое действие +, -. *, /, %, pow.');
    if( action !== '+' && action !== '-' && action !== '*' && action !== '/' && action !== 'pow' && action !== '%') {
        console.log(action);
        console.log(typeof action);
        return  alert('Ошибка');
    }
    if(action === '+') {
        return plus(firstNum, secondNum);
    } else if(action === '-') {
        return minus(firstNum, secondNum);
    } else if(action === '*') {
        return mult(firstNum, secondNum);
    } else if(action === '/') {
        return div(firstNum, secondNum);
    } else if(action === 'pow') {
        return pow(firstNum, secondNum);
    } else if(action === '%') {
        return modulo(firstNum, secondNum);
    }
}

function plus(a, b) {
    return alert(a + b);
}
function minus(a, b) {
    return alert(a - b);
}
function mult(a, b) {
    return alert(a * b);
}
function div(a, b) {
    return alert(a / b);
}
function pow(a, b) {
    return alert(Math.pow(a, b));
}
function modulo(a, b) {
    return alert(a % b);
}