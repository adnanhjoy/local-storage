const getInputField = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addStudentInfo = () => {
   const nameValue =  getInputField('name-field');
   const ageValue = getInputField('age-field');
   localStorage.setItem(nameValue, ageValue);
}