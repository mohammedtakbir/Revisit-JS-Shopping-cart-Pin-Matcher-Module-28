document.getElementById('phone-plus-btn').addEventListener('click', () => {
    //* update phone count
    const phoneCount = getInputCount('phone-count');
    const totalPhoneCount = phoneCount + 1
    setInputValue('phone-count', totalPhoneCount);

    //* update phone price
    setElementValue('phone-price', 699 * totalPhoneCount);
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
})