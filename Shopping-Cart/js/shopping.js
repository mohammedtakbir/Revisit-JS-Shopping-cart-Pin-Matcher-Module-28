document.getElementById('phone-plus-btn').addEventListener('click', () => {
    //* update phone count
    const phoneCount = getInputCount('phone-count');
    const totalPhoneCount = phoneCount + 1
    setInputValue('phone-count', totalPhoneCount);

    //* update phone price
    setElementValue('phone-price', 699 * totalPhoneCount)   
})