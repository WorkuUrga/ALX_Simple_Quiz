function add(number1, number2) {
    return number1 + number2;
}

const addition = document.getElementById('add');
addition.addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

function subtract(number1, number2){
    return number1 - number2;
}

const subtraction = document.getElementById('subtract');
subtraction.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

function multiplication(number1, number2) {
    return number1 * number2;
}

const multiple = document.getElementById('multiply');
multiple.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiplication(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

function division(number1, number2){
    return number1 / number2;
}

const divisions = document.getElementById('divide');
divisions.addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = division(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
