function isPrimeNumber(number) {
    const squareNumber = Math.sqrt(number);

    if (number < 2) return false;

    for (let index = 2; index <= squareNumber; index++) {
        if (number % index === 0) {
            return false;
        }
    }

    return true;
}

function displayResult(selector, result) {
    document.querySelector(selector).innerHTML = 'This number is ' + result + '.';
}

function displayError(selector, result) {
    result = result.fontcolor("red");
    document.querySelector(selector).innerHTML = result;
}

function primeNumber(number) {
    let result = '';

    isPrimeNumber(number) ? result = 'prime number' : result = 'not prime number';

    return displayResult('.result', result);
}

function primeNumberFinder(number) {
    let result = 0;
    let index = 0;

    while (index < number) {

        if (isPrimeNumber(++result)) {
            index++;
        }
    }

    return displayResult('.primeResult', result);
}

document.getElementById('calculation').onclick = () => {
    const input = document.getElementById('prime');

    if (parseInt(input.value) < 2 || isNaN(input.value) || input.value === '') {
        return displayError('.result', 'This number is incomprehensible!');
    }

    primeNumber(parseInt(input.value));
};

document.getElementById('primeCalculation').onclick = () => {
    const input = document.getElementById('serial');

    if (isNaN(input.value) || input.value === '') {
        return displayError('.primeResult', 'Value must be number!');
    }

    primeNumberFinder(parseInt(input.value));
};