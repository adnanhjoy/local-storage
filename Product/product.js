const getInputValue = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
const product = getInputValue('name-field');
const quantity = getInputValue('quantity-field');
// localStorage.setItem(product, quantity)
displayVlaue(product, quantity);
setSavedCart(product, quantity)
};

const getProductCart = () => {
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
};

const setSavedCart = (product, quantity) => {
    const cart = getProductCart();
    cart[product] = quantity;
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied );
};

const displayVlaue = (product, quantity) => {
    const productItem = document.getElementById('product-item');
    const li = document.createElement('li');
    li.innerText = `${product} ${quantity}`
    productItem.appendChild(li)
};

const addDisplay = () => {
    const cart = getProductCart()
    for(const product in cart){
        const quantity = cart[product];
        console.log(product, quantity)
        displayVlaue(product, quantity)
    }
};

addDisplay()