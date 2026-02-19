const productsData = [
    {id: 1, name: 'ຂາໄກ່', price: 30000, img: './img/ຂອງຄາວ.avif'},
    {id: 2, name: 'ກະເພົາໄກ່ໄຂ່ດາວ', price: 30000, img: './img/ຂອງຄາວ1.jpg'},
    {id: 3, name: 'ລາດໜ້າໄກ່ກອບ', price: 40000, img: './img/ຂອງຄາວ2.png'},
    {id: 4, name: 'ໄກ່ອົບ', price: 65000, img: './img/ຂອງຄາວ3.jpg'},
    {id: 5, name: 'ຕົ້ມຍຳກຸ້ງ', price: 45000, img: './img/ຂອງຄາວ4.jpg'},
    {id: 6, name: 'ຕຳໝາກຮຸ່ງ', price: 25000, img: './img/ຂອງຄາວ5.jpg'},
    {id: 7, name: 'ດັງໂງະ', price: 20000 , img: './img/ຂອງຫວານ.avif'},
    {id: 8, name: 'ສະຕໍເບີລີ່ຊ໊ອດເຄັກ', price: 20000, img: './img/ຂອງຫວານ1.webp'},
    {id: 9, name: 'ບາວນີ', price: 35000, img: './img/ຂອງຫວານ2.jpg'},
    {id: 10, name: 'ຊູຄີມ', price: 10000, img: './img/ຂອງຫວານ3.png'},
    {id: 11, name: 'ເຄັກຊາຂຽວ', price: 25000, img: './img/ຂອງຫວານ4.jpg'},
    {id: 12, name: 'ຂະໜົມຊັ້ນ', price: 25000, img: './img/ຂອງຫວານ5.jpg'},
    {id: 13, name: 'ຊາໄທ', price: 25000, img: './img/ເຄື່ອງດື່ມ1.webp'},
    {id: 14, name: 'ນ້ຳໝາກໂມ', price: 20000, img: './img/ເຄື່ອງດື່ມ2.jpg'},
    {id: 15, name: 'coca cola', price: 15000, img: './img/ເຄື່ອງດື່ມ3.webp'},
    {id: 16, name: 'ແປບຊີ', price: 15000, img: './img/ເຄື່ອງດື່ມ4.jpg'},
    {id: 17, name: 'ຢາຄຸ', price: 10000, img: './img/ເຄື່ອງດື່ມ5.jpg'},
    {id: 18, name: 'ນ້ຳໝາກພ້າວ', price: 15000, img: './img/ເຄື່ອງດື່ມ6.webp'},
];  

const cartCount = document.getElementById('cartCount');
const productsElement = document.getElementById('productList');
const cartItem = document.getElementById('cartItem');
const totalElm = document.getElementById('total');
const clearBtn = document.getElementById('clearBtn'); 

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
    productsElement.innerHTML = '';
    
    productsData.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');

        const img = document.createElement('img');
        img.src = product.img;

        const name = document.createElement('p');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = product.price.toLocaleString() + ' LAK';

        const btn = document.createElement('button');
        btn.textContent = 'ເພີ່ມສິນຄ້າ';
        btn.addEventListener('click', () => addToCart(product.id));

        div.append(img, name, price, btn);
        productsElement.appendChild(div);
    });
};

function addToCart(id) {
    const product = productsData.find(product => product.id === id);
    cart.push(product);
    updateCart();
};

function updateCart() {
    cartItem.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toLocaleString()} LAK`;

        const span = document.createElement('span');
        span.textContent = ' ❌';
        span.addEventListener('click', () => removeItem(index));

        li.appendChild(span);
        cartItem.appendChild(li);
    });

    totalElm.textContent = total.toLocaleString() + ' LAK';
    cartCount.textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}


function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
};

clearBtn.addEventListener('click', () => {
    cart = [];
    updateCart();
});

renderProducts();
updateCart();