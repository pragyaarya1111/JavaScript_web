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
        name: 'Butterfly Strawberry Cake',
        image: 'cake1.jpg',
        price: 2000
    },
    {
        id: 2,
        name: 'Strawberry Cake',
        image: 'cake2.jpg',
        price: 1800
    },
    {
        id: 3,
        name: 'Strawberry Choco Lava Cake',
        image: 'cake3.jpg',
        price: 2500
    },
    {
        id: 4,
        name: 'Ferrero Rocher Cake',
        image: 'cake4.jpg',
        price: 2300
    },
    {
        id: 5,
        name: 'KitKat Cake',
        image: 'cake5.jpg',
        price: 1800
    },
    {
        id: 6,
        name: 'Fruit Choco Lava',
        image: 'cake6.jpg',
        price: 2600
    },
    {
        id: 6,
        name: 'Oreo Cake',
        image: 'cake7.jpg',
        price: 1900
    },
    {
        id: 6,
        name: 'Carrot Cake',
        image: 'cake8.jpg',
        price: 2400
    },
    {
        id: 6,
        name: 'Chocolate Cake',
        image: 'cake9.jpg',
        price: 1500
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
