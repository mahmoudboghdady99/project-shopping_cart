
let productsIncart = localStorage.getItem("cartproducts")
let productDom=document.querySelector(".products")

if(productsIncart)
{
    let items = JSON.parse(productsIncart);
    drawProducts(items)
}

function drawProducts(products)
 {
    let productscartUi = products.map((item) => 
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
    <input type="submit" onclick="removeFromcart(${item.id})" value="remove from cart" class="btnShow">
    <i class="fa fa-heart"></i>
    </div>
    </div>
        
        `
    })
    productDom.innerHTML=productscartUi;
 }































// let productCart = localStorage.getItem("cartproducts");
// let productDom = document.querySelector(".products");

// if(productCart)
// {
//     let items = JSON.parse(productCart)
//     drawDatacartUi(items);
// }
// function drawDatacartUi(products)
// {
//    let productscartUi = products.map((item) => 
//    {
//        return ` 
//        <div class="product-item">
//        <img src="${item.imgUrl}" alt="image" srcset="">
   
   
//    <div class="product-item-desc">
//    <h2>${item.title} </h2>
//    <p>Lorem ipsum dolor sit amet consectetur. </p>
//    <span>size: ${item.size}</span>
//    </div>
   
//    <div class="product-item-action">
//    <input type="submit" onclick="removeFromcart(${item.id})" value="removeFromcart" class="btnShow">
//    <i class="fa fa-heart"></i>
//    </div>
//    </div>
       
//        `
//    })
//    productDom.innerHTML=productscartUi;
// }
