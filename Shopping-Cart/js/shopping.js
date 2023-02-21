//* phone price calculation
document.getElementById('phone-plus-btn').addEventListener('click', () => {
    //* update phone count
    const phoneCount = getInputCount('phone-count');
    const totalPhoneCount = phoneCount + 1
    setInputValue('phone-count', totalPhoneCount);

    //* update phone price
    const phonePrice = totalPhoneCount * 699;
    setElementValue('phone-price', phonePrice);

    const subTotal = calculateSubTotal('sub-total', 699, true);
    const tax = calculateTax('tax', subTotal, true)
    calculateTotal('total', subTotal + tax, true);


})
document.getElementById('phone-minus-btn').addEventListener('click', () => {
    //* update phone count
    const phoneCount = getInputCount('phone-count');
    if (phoneCount < 1) {
        return;
    }
    const totalPhoneCount = phoneCount - 1;
    setInputValue('phone-count', totalPhoneCount);

    //* update phone price
    const previousPhonePrice = getElementValue('phone-price');
    setElementValue('phone-price', previousPhonePrice - 699);

    const subTotal = calculateSubTotal('sub-total', 699, false);
    const tax = calculateTax('tax', subTotal, false);
    calculateTotal('total', subTotal + tax, false)
})

//* case price calculation
document.getElementById('case-plus-btn').addEventListener('click', () => {
    const caseCount = getInputCount('case-count');
    const totalCaseCount = caseCount + 1;
    setInputValue('case-count', totalCaseCount);
    
    //* update phone price
    setElementValue('case-price', totalCaseCount * 59);

    const subTotal = calculateSubTotal('sub-total', 59, true);
    const tax = calculateTax('tax', subTotal, true)
    calculateTotal('total', subTotal + tax, true);

})
document.getElementById('case-minus-btn').addEventListener('click', () => {
    const caseCount = getInputCount('case-count');
    if (caseCount < 1) {
        return;
    }
    const totalCaseCount = caseCount - 1;
    setInputValue('case-count', totalCaseCount);

    //* update case price
    const previousCasePrice = getElementValue('case-price');
    setElementValue('case-price', previousCasePrice - 59);

    const subTotal = calculateSubTotal('sub-total', 59, false);
    const tax = calculateTax('tax', subTotal, false);
    calculateTotal('total', subTotal + tax, false)

})

//* remove products
document.getElementById('remove-phone-btn').addEventListener('click', (e) => {
    removeProducts(e);
})
document.getElementById('remove-case-btn').addEventListener('click', (e) => {
    removeProducts(e);
})
