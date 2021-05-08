const btnArr = document.querySelectorAll(`.btn`);
const imgArr = document.querySelectorAll(`.img`);
const nameArr = document.querySelectorAll(`.p-name`);
const priceArr = document.querySelectorAll(`.p-price`);
const qtyArr = document.querySelectorAll(`.input`);
// const itemCostArr = document.querySelectorAll(`.item-cost`);  
// const itemTotalArr = document.querySelectorAll(`.item-total`);

const newProduct = {};
const newProductsArray = [];

const thisImg = [];
const thisName = [];
const thisPrice = [];
const thisQty = [];
const thisItemCost = [];
const thisItemTotal = [];

const thisImg_ = imgArr.forEach((img) => thisImg.push(img));
const thisName_ = nameArr.forEach((name) => thisName.push(name));
const thisPrice_ = priceArr.forEach((price) => thisPrice.push(price));
const thisQty_ = qtyArr.forEach((qty) => thisQty.push(qty));

// add to cart event => home.html

btnArr.forEach((btn, i) => {
    btn.addEventListener(`click`, (e) => {
        e.preventDefault()
        
        const images = thisImg[i].src.split(`/images/`)[1];
        const names = thisName[i].textContent.split(`Name`)[1];
        const prices = thisPrice[i].textContent.split(`$`)[1];
        const quantities = thisQty[i].value;

        let myCartImages = [];
        let myCartNames = [];
        let myCartPrices = [];
        let myCartQuantities = [];

        if(localStorage.getItem(`cartItemImage`) !== null) { 
            console.log(JSON.parse(localStorage.getItem(`cartItemImage`)))
            if(JSON.parse(localStorage.getItem(`cartItemImage`)).length > 0) {
                myCartImages = JSON.parse(localStorage.getItem(`cartItemImage`));
            }
        } else myCartImages = [];
        
        myCartImages.push(images);

        localStorage.setItem(`cartItemImage`, JSON.stringify(myCartImages));

        if(localStorage.getItem(`cartItemName`) !== null) { 
            console.log(JSON.parse(localStorage.getItem(`cartItemName`)))
            if(JSON.parse(localStorage.getItem(`cartItemName`)).length > 0) {
                myCartNames = JSON.parse(localStorage.getItem(`cartItemName`));
            }
        } else myCartNames = [];
        
        myCartNames.push(names);

        localStorage.setItem(`cartItemName`, JSON.stringify(myCartNames));

        if(localStorage.getItem(`cartItemPrice`) !== null) { 
            console.log(JSON.parse(localStorage.getItem(`cartItemPrice`)))
            if(JSON.parse(localStorage.getItem(`cartItemPrice`)).length > 0) {
                myCartPrices = JSON.parse(localStorage.getItem(`cartItemPrice`));
            }
        } else myCartPrices = [];
        
        myCartPrices.push(prices);

        localStorage.setItem(`cartItemPrice`, JSON.stringify(myCartPrices));

        if(localStorage.getItem(`cartItemQty`) !== null) { 
            console.log(JSON.parse(localStorage.getItem(`cartItemQty`)))
            if(JSON.parse(localStorage.getItem(`cartItemQty`)).length > 0) {
                myCartQuantities = JSON.parse(localStorage.getItem(`cartItemQty`));
            }
        } else myCartQuantities = [];
        
        myCartQuantities.push(quantities);

        localStorage.setItem(`cartItemQty`, JSON.stringify(myCartQuantities));
    });
});

const showCartItems = document.querySelector(`#cartTotal`);
const cartItemsTotal = JSON.parse(localStorage.getItem(`cartItemImage`));

showCartItems.textContent = cartItemsTotal.length;

// end add to cart event

// view cart event => mycart.html

const cartTable = document.querySelector(`table`);
const totalCost = document.querySelector(`.t-cost`);

const cartItemImage__ = JSON.parse(localStorage.getItem(`cartItemImage`));
const cartItemName__ = JSON.parse(localStorage.getItem(`cartItemName`));
const cartItemPrice__ = JSON.parse(localStorage.getItem(`cartItemPrice`));
const cartItemQuantity__ = JSON.parse(localStorage.getItem(`cartItemQty`));

let costOfCart = 0;

cartItemImage__.forEach((image, i) => {
    console.log(image);
    cartTable.innerHTML += `
        <tbody>
        <tr>
            <td>
                <img src="./images/${cartItemImage__[i]}" alt="Guitar 1 infp" class = "cart-image"><br/>
                ${cartItemName__[i]}
            </td>
        </tr>
        <tr>
            <td class = "item-cost">
            ${cartItemPrice__[i]}
            </td>
        </tr>
        <tr>
            <td>
                &emsp;&ensp;<span class = "item-qty">${cartItemQuantity__[i]}</span>
            </td>
        </tr>
        <tr>
            <td class = "item-total">
                ${parseInt(cartItemPrice__[i]) * parseInt(cartItemQuantity__[i])}
            </td>
        </tr>
        </tbody>
    `
    costOfCart += parseInt(cartItemPrice__[i]) * parseInt(cartItemQuantity__[i]);

    console.log(costOfCart);
    ;
    totalCost.textContent = `${costOfCart}`;
});

// end view cart event
