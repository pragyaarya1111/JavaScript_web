
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
        name: 'Chocolate Pastry',
        image: 'pastry1.jpg',
        price: 80
    },
    {
        id: 2,
        name: 'Strawberry Vanilla Pastry',
        image: 'pastry2.jpg',
        price: 100
    },
    {
        id: 3,
        name: 'Chocolate Banana Pastry',
        image: 'pastry3.jpg',
        price: 120
    },
    {
        id: 4,
        name: 'Choco Truffle pastry',
        image: 'pastry4.jpg',
        price: 120
    },
    {
        id: 5,
        name: 'Raspberry layer pastry',
        image: 'pastry5.jpg',
        price: 180
    },
    {
        id: 6,
        name: 'Raspberry Chocolate pastry',
        image: 'pastry6.jpg',
        price: 190
    },
    {
        id: 6,
        name: 'Strawberry layer pastry',
        image: 'pastry7.jpg',
        price: 120
    },
    {
        id: 6,
        name: 'Cherry Chocolate Cake',
        image: 'pastry8.jpg',
        price: 190
    },
    {
        id: 6,
        name: 'Fruit Chocolate pastry',
        image: 'pastry9.jpg',
        price: 150
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
        // copy product form list to list card
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