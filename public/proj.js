let carts = document.querySelectorAll('.add-cart');
let products = [
    {
      name: 'stratocaster',
      tag: 'stratocaster',
      price: 15,
      inCart: 0  
    }, 
    {
        name: 'telecaster',
        tag: 'telecaster',
        price: 20,
        inCart: 0 
      }, 
      {
        name: 'fender',
        tag: 'fender',
        price: 25,
        inCart: 0
      }, 
      {
        name: 'gibson',
        tag: 'gibson',
        price: 30,
        inCart: 0  
      },  {
        name: 'hamburker',
        tag: 'hamburker',
        price: 35,
        inCart: 0 
      },  {
        name: 'martial',
        tag: 'martial',
        price: 40,
        inCart: 0
      }, 
]
for(let i =0; i<carts.length; i++){
    carts[i].addEventListener('click', () => {
     cartnumbers(products[i]);
     totalcost(products[i]); 
    })
    
}
function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers;
  }
}
function cartnumbers(product){
    console.log('the product is', product);
    let productNumbers = localStorage.getItem('cartnumbers');
    productNumbers = parseInt(productNumbers);  
 if(productNumbers){
     localStorage.setItem('cartnumbers', productNumbers +1)
 document.querySelector('.cart span').textContent = productNumbers +1
;    }else{
     localStorage.setItem('cartnumbers', 1);
     document.querySelector('.cart span').textContent = 1;
    

    }
    setItems(product);
}   

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1; 
    } else{
        product.inCart = 1;  
      cartItems = {
          [product.tag]: product 
    }
     }
    
     localStorage.setItem("productsInCart", JSON.stringify
     (cartItems));
}

function totalcost(product){
   // console.log("the product is", product.price);
   let cartCost = localStorage.getItem('totalCost');
   console.log(typeof cartCost);
   console.log("cartCost", cartCost);
   if(cartCost !== null){
    cartCost = parseInt(cartCost); 
       localStorage.setItem("totalCost", cartCost + product.price);
   }
   else{
    localStorage.setItem("totalCost", product.price);
   }  
  }

  function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    if(cartItems && productContainer )
    {
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
// productContainer.innerHTML += `
  
// `
      });
    }
  }

onLoadCartNumbers();
displayCart();














