let count = 0;
const countButton = () => {
    count++;
    const para = document.getElementById('para');
    const paraValue = parseInt(para.innerText);
    const updateParaValue = count+paraValue;
    para.innerText = updateParaValue;
    localStorage.setItem('count', updateParaValue)                              
};