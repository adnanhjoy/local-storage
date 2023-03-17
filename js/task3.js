const getInputField = id => {
const inputField = document.getElementById(id);
const inputValue = inputField.value;
return inputValue;
};

const sendData = () => {
    const nameField = getInputField('name-field');
    localStorage.setItem('name', nameField)
}

const deletData = () => {
    localStorage.removeItem('name')
}