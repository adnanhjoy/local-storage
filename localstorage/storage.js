// document.getElementById('add-btn').addEventListener('click', function(){
    
// });
const addFunction = () => {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    localStorage.setItem('name', inputValue)
}
document.getElementById('rmv-btn').addEventListener('click', function(){
    localStorage.removeItem('name')
})