function generateRandomNumber() {
    const generateNumber = Math.round(Math.random() * 10000);
    return generateNumber;
}
function getPink() {
    const pin = generateRandomNumber();
    const pinString = pin.toString();
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPink();
    }
}
document.getElementById('generate-btn').addEventListener('click', () => {
    const pink = getPink();
    const generatedPin = document.getElementById('generated-pin');
    generatedPin.value = pink;
})
document.getElementById('calculator').addEventListener('click', (e) => {
    const typedDigits = e.target.innerText;
    const typedFilled = document.getElementById('typed-filled');
    if (isNaN(typedDigits)) {
        if (typedDigits === 'C') {
            typedFilled.value = '';
        } else if (typedDigits === '<') {
            // const splitted = typedFilled.value.split('');
            // splitted.pop();
            // typedFilled.value = splitted.join('');

            //* ease way
            const remainingDigit = typedFilled.value.slice(0, typedFilled.value.length - 1)
            typedFilled.value = remainingDigit;
        }
    } else {
        typedFilled.value += typedDigits;
    }
})
document.getElementById('submit').addEventListener('click', () => {
    const generatedPin = document.getElementById('generated-pin');
    const typedPin = document.getElementById('typed-filled');
    const rightMessage = document.getElementById('right-message');
    const wrongMessage = document.getElementById('wrong-message');

    if (generatedPin.value === typedPin.value) {
        rightMessage.style.display = 'block';
        wrongMessage.style.display = 'none';
    } else {
        wrongMessage.style.display = 'block';
        rightMessage.style.display = 'none';
    }
})