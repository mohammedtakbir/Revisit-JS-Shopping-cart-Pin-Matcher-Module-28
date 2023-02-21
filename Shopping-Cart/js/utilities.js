function getInputCount(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseInt(inputField.value);
    return inputValue;
}
function setInputValue(inputId, count) {
    const input = document.getElementById(inputId);
    input.value = count;
}
function getElementValue(inputId) {
    const textField = document.getElementById(inputId);
    return parseFloat(textField.innerText);
}
function setElementValue(elementId, price) {
    const element = document.getElementById(elementId);
    element.innerText = price;
}