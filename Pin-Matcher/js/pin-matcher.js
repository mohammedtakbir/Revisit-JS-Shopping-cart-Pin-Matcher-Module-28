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