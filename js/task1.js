const getInputValue = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
};
const getStudentInfo = () => {
const nameValue = getInputValue('name-field');
const rollValue = getInputValue('roll-field');
// localStorage.setItem(nameValue, rollValue);
addStudentList(nameValue, rollValue);
savedStudentInfo(nameValue, rollValue);

};

const getStudentList = () => {
    const info = localStorage.getItem('student');
    let student = {};
    if(info){
        student = JSON.parse(info);
    }
    return student;
};

const savedStudentInfo = (nameValue, rollValue) => {
    const student = getStudentList();
    student[nameValue] = rollValue;
    const studentStringify = JSON.stringify(student);
    localStorage.setItem('student', studentStringify);
};

const addStudentList = (nameValue,rollValue) => {
    const studentList = document.getElementById('student-list');
    const li = document.createElement('li');
    li.innerText = `${nameValue} ${rollValue}`;
    studentList.appendChild(li);
};

const displayStudentValue = () => {
    const student = getStudentList()
    for(const nameValue in student){
        const rollValue = student[nameValue]
        addStudentList(nameValue, rollValue)
    }
}
displayStudentValue();