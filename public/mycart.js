const btnArr = document.querySelectorAll(`.btn`);
const imgArr = document.querySelectorAll(`.img`);
const nameArr = document.querySelectorAll(`.p-name`);
const priceArr = document.querySelectorAll(`.p-price`);
const qtyArr = document.querySelectorAll(`.input`);

const newProduct = {};
const newProductsArray = [];

const thisImg = [];
const thisName = [];
const thisPrice = [];
const thisQty = [];

const thisImg_ = imgArr.forEach((img) => thisImg.push(img));
const thisName_ = nameArr.forEach((name) => thisName.push(name));
const thisPrice_ = priceArr.forEach((price) => thisPrice.push(price));
const thisQty_ = qtyArr.forEach((qty) => thisQty.push(qty));

btnArr.forEach((btn, i) => {
    btn.addEventListener(`click`, (e) => {
        e.preventDefault()
        // console.log(thisImg[i].src.split(`/images/`)[1]);
        // console.log(thisName[i].textContent.split(`Name`)[1]);
        // console.log(thisPrice[i].textContent.split(`Price`)[1]);
        // console.log(thisQty[i].value);
        
        const images = thisImg[i].src.split(`/images/`)[1];
        const names = thisName[i].textContent.split(`Name`)[1];
        const prices = thisPrice[i].textContent.split(`$`)[1];
        const quantities = thisQty[i].value;

        let myCartImages = [];
        const myCartNames = [];
        const myCartPrices = [];
        const myCartQuantities = [];

        if(localStorage.getItem(`cartItemImage`) !== null) { 
            console.log(JSON.parse(localStorage.getItem(`cartItemImage`)))
            if(JSON.parse(localStorage.getItem(`cartItemImage`)).length > 0) {
                myCartImages = JSON.parse(localStorage.getItem(`cartItemImage`));
            }
        } else myCartImages = [];
        
        myCartImages.push(images);

        localStorage.setItem(`cartItemImage`, JSON.stringify(myCartImages));

        //todo: reuse logic here
        localStorage.setItem(`cartItemName`, names);
        localStorage.setItem(`cartItemPrice`, prices);
        localStorage.setItem(`cartItemQty`, quantities);

        console.log(new Array(localStorage.getItem(`cartItemImage`)))
    });
});

