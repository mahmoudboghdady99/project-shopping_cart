//hold variables

let links = document.querySelector(".list")
let userInfo=document.querySelector("#user_info")
let userDom=document.querySelector("#user_name")
let logOut=document.querySelector("#logout")





let nameUser=localStorage.getItem("username");


links.remove();
userInfo.style.display="flex";
userDom.innerHTML=nameUser;

logOut.addEventListener("click", function()
{
    localStorage.clear();
    setTimeout(function(){
        window.location="register.html"
    }, 1500)
})

// products

//hold variables
let productDom=document.querySelector(".products")
let productCart=document.querySelector(".cart-products div")
let badgeDom=document.querySelector(".badge")

let shoppingCart=document.querySelector(".shoping-cart")

let cartproducts=document.querySelector(".cart-products")

shoppingCart.addEventListener("click", openItems);

function openItems()
{
    if(productCart.innerHTML !="")
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

function addtoCart(id)
{
    let chossenItem = products.find((item) => item.id===id);
    productCart.innerHTML += ` <p>${chossenItem.title} </p> `

    badgeDom.style.display="block";
    let cartItems=document.querySelectorAll(".cart-products div p")
    badgeDom.innerHTML = cartItems.length;
}

    
    













// let chossenItem = products.find((item) => item.id === id);
// cartProductDom.innerHTML += `<p>${chossenItem.title}</p>`
//














