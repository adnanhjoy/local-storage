const getInputField = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addStudentInfo = () => {
   const nameValue =  getInputField('name-field');
   const ageValue = getInputField('age-field');
//    localStorage.setItem(nameValue, ageValue);
   addInfoList(nameValue, ageValue);
   savedStudentInfo(nameValue, ageValue);
};

const getStudentInfo = () => {
    const info = localStorage.getItem('student');
    let student = {};
    if(info){
        student = JSON.parse(info);
    }
    return student;
};

const savedStudentInfo = (nameValue, ageValue) => {
    const student = getStudentInfo();
    student[nameValue] = ageValue;
    const infoStringfy = JSON.stringify(student);
    localStorage.setItem('student', infoStringfy);
}

const addInfoList = (nameValue, ageValue) => {
    const infoList = document.getElementById('infoList');
    const li = document.createElement('li');
    li.innerText = `${nameValue} ${ageValue}`;
    infoList.appendChild(li);
};

const displayStudentValue = () => {
   const student =  getStudentInfo()
   for(const nameValue in student){
    const ageValue = student[nameValue];
    addInfoList(nameValue, ageValue)
   }
}
displayStudentValue()