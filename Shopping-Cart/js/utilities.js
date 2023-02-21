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
function removeProducts(e) {
    e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode);
}
//* subTotal
function calculateSubTotal(elementId, value, isIncrease) {
    const subTotal = getElementValue(elementId);
    if (isIncrease) {
        const totalSub = subTotal + value;
        setElementValue(elementId, totalSub)
        return totalSub;
    } else {
        const totalSub = subTotal - value;
        setElementValue(elementId, totalSub);
        return totalSub;
    }
}
//* increase tax
function calculateTax(elementId, value, isIncrease) {
    if (isIncrease) {
        const tax = (value * 2 / 100)
        setElementValue(elementId, tax.toFixed(2));
        return tax;
    } else {
        const tax = (value * 2 / 100)
        setElementValue(elementId, tax.toFixed(2));
        return tax;
    }
}
//* increase total
function calculateTotal(elementId, value, isIncrease) {
    if (isIncrease) {
        setElementValue(elementId, value);
    } else {
        setElementValue(elementId, value);
    }
}