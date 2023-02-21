function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}
document.getElementById('generate-pin').addEventListener('click', () => {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', (e) => {
    const number = e.target.innerText;
    const typedPin = document.getElementById('typed-pin');
    if (isNaN(number)) {
        if (number === 'C') {
            typedPin.value = '';
        } else if (number === '<') {
            const digits = typedPin.value.split('');
            digits.pop();
            const remain = digits.join('');
            typedPin.value = remain;

            // typedPin.value.slice(typedPin.value.length - 1, typedPin.value.length);
            // const remain = typedPin.value.slice(0, typedPin.value.length - 1);
            // typedPin.value = remain;
        }
    } else {
        typedPin.value += number
    }
})
