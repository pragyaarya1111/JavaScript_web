
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Chocolate Chip Cookies',
        image: 'cookies1.jpg',
        price: 300
    },
    {
        id: 2,
        name: 'Vanilla Cookies',
        image: 'cookies2.jpg',
        price: 200
    },
    {
        id: 3,
        name: 'Coconut Cookies',
        image: 'cookies3.jpg',
        price: 350
    },
    {
        id: 4,
        name: 'Pistachio Chocolate Cookies',
        image: 'cookies4.jpg',
        price: 450
    },
    {
        id: 5,
        name: 'Strawberry Cookies',
        image: 'cookies5.jpg',
        price: 370
    },
    {
        id: 6,
        name: 'choco-Vanilla Cookies',
        image: 'cookies6.jpg',
        price: 400
    },
    {
        id: 6,
        name: 'Chocolate MnMs cookies',
        image: 'cookies7.jpg',
        price: 500
    },
    {
        id: 6,
        name: 'Choco-coffee Cookies',
        image: 'cookies8.jpg',
        price: 390
    },
    {
        id: 6,
        name: 'Raspberry Cookies',
        image: 'cookies9.jpg',
        price: 550
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
