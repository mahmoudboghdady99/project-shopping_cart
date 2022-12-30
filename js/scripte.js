

// products

//hold variables
let productDom=document.querySelector(".products")
let productCartDiv=document.querySelector(".cart-products div")
let badgeDom=document.querySelector(".badge")

let shoppingCart=document.querySelector(".shoping-cart")

let cartproducts=document.querySelector(".cart-products")

shoppingCart.addEventListener("click", openItems);

function openItems()
{
    if(productCartDiv.innerHTML !="")
    {
        if(cartproducts.style.display=="block")
        {
            cartproducts.style.display="none";
        }else{
            cartproducts.style.display="block";
        }
    }
}


let products = [
    {id:1, title: "Glasses", size: "small", imgUrl: "images/glasses.jpg"},
    {id:2, title: "Mobile", size: "large", imgUrl: "images/mobile.jpg"},
    {id:3, title: "Tv", size: "x-large", imgUrl: "images/tv.jpg"},
    {id:4, title: "Headphone", size: "large", imgUrl: "images/head_phone.jpg"},
];


//function && events
 function drawData()
 {
    let productsUi = products.map((item) => 
    {
        return ` 
        <div class="product-item">
        <img src="${item.imgUrl}" alt="image" srcset="">
    
    
    <div class="product-item-desc">
    <h2>${item.title} </h2>
    <p>Lorem ipsum dolor sit amet consectetur. </p>
    <span>size: ${item.size}</span>
    </div>
    
    <div class="product-item-action">
    <input type="submit" onclick="addtoCart(${item.id})" value="Add to cart" class="btnShow">
    <i class="fa fa-heart"></i>
    </div>
    </div>
        
        `
    })
    productDom.innerHTML=productsUi;
 }
 


drawData();
let addedItem = localStorage.getItem('cartproducts') ? 
JSON.parse(localStorage.getItem("cartproducts")) :
[];
if(addedItem)
{
    addedItem.map((item) => {
        productCartDiv.innerHTML += ` <p>${item.title} </p> `
        badgeDom.style.display="block";
        let cartItems=document.querySelectorAll(".cart-products div p")

        badgeDom.innerHTML = cartItems.length;

    })
}
function addtoCart(id)
{
    if(localStorage.getItem("username"))
    {
        let chossenItem = products.find((item) => item.id===id);

        productCartDiv.innerHTML += ` <p>${chossenItem.title} </p> `
    
        addedItem = [...addedItem , chossenItem]
        localStorage.setItem("cartproducts", JSON.stringify(addedItem))

        badgeDom.style.display="block";
        let cartItems=document.querySelectorAll(".cart-products div p")
        badgeDom.innerHTML = cartItems.length;

      


    }else{
        window.location="login.html"
    }

 
}

    
    













// let chossenItem = products.find((item) => item.id === id);
// cartProductDom.innerHTML += `<p>${chossenItem.title}</p>`
//














