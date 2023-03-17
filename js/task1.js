const getInputValue = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
};
const getStudentInfo = () => {
const nameValue = getInputValue('name-field');
const rollValue = getInputValue('roll-field');
localStorage.setItem(nameValue, rollValue)
};

const getStudentList = () => {
    const info = localStorage.getItem('info');
    let student = {};
    if(info){
        student = JSON.parse(info);
    }
    return student;
}

const addStudentList = (nameValue,rollValue) => {
    const studentList = document.getElementById('student-list');
    const li = document.createElement('li');
    li.innerText = `${nameValue} ${rollValue}`;
    studentList.appendChild(li);
};