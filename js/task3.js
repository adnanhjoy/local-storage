const getInputField = id => {
const inputField = document.getElementById(id);
const inputValue = inputField.value;
inputField.value = '';
return inputValue;
};

const sendData = () => {
    const nameField = getInputField('name-field');
    localStorage.setItem('name', nameField) 
    return nameField;
};

const emailSendData = () => {
    const emailField = getInputField('email-field');
    localStorage.setItem('email', emailField)
    return emailField;
}
const messageSendData = () => {
    const messageField = getInputField('message-field');
    localStorage.setItem('message', messageField)
    return messageField;
}

const deletData = () => {
    localStorage.removeItem('name')
}
const emailDeletData = () => {
    localStorage.removeItem('email')
}
const messageDeletData = () => {
    localStorage.removeItem('message')
}

const resetButton = () => {
    localStorage.clear()
};

const getPersonData = () => {
    const info = localStorage.getItem('userInfo');
    let userInfo = {};
    if(info){
        userInfo = JSON.parse(info);
    }
    return userInfo
};


const saveButton = () => {
    const nameValue = sendData()
    const emailValue = emailSendData()
    const messageValue = messageSendData()
    savedPersonData(nameValue, emailValue, messageValue)
};

const savedPersonData = (nameValue, emailValue, messageValue) => {
    const userInfo  = getPersonData();
    userInfo[nameValue] = 'name';
    userInfo[emailValue] = 'email';
    userInfo[messageValue] = 'message';
    const emaliStringify = JSON.stringify(userInfo);
    localStorage.setItem('userInfo', emaliStringify);
}