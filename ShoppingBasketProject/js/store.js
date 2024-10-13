let allProducts = [
    {id : 1 , title : "Album 1" , image : "Images/Album 1.png" , price:12.99 , count : 1 } ,
    {id : 2 , title : "Album 2" , image : `Images/Album 2.png` , price:14.99 , count : 1} ,
    {id : 3 , title : "Album 3" , image : "Images/Album 3.png" , price:9.99 , count : 1} ,
    {id : 4 , title : "Album 4" , image : "Images/Album 4.png" , price:19.99, count : 1} ,
    {id : 5 , title : "Coffe" , image : "Images/Cofee.png" , price:6.99 , count : 1} ,
    {id : 6 , title : "Shirt" , image : "Images/Shirt.png" , price:19.99, count : 1} ,
]

let userBasket = [] ; 
let $ = document ; 
const shopItemsContainer = $.querySelector('.shop-items')
const basketProductsContainer = $.querySelector('.cart-items')
const removeAllProductsBtn = $.querySelector('#remove-all-products')
const cartTotalPriceElem = $.querySelector('.cart-total-price') ;


let fragmentData = $.createDocumentFragment() ; 
allProducts.forEach(function(product){
    let productContainer=  $.createElement('div') ; 
    productContainer.classList.add('shop-item');

    let productTitleSpan = $.createElement('span') ;
    productTitleSpan.classList.add('shop-item-title') ; 
    productTitleSpan.innerHTML = product.title ; 

    let productImageElem = $.createElement('img'); 
    productImageElem.classList.add('shop-item-image')
    productImageElem.setAttribute('src' , product.image)

    let productDetailsContainer = $.createElement('div') ; 
    productDetailsContainer.classList.add('shop-item-details') ; 

    let productPriceSpan = $.createElement('span'); 
    productPriceSpan.innerHTML = product.price
    productPriceSpan.classList.add('shop-item-price') ; 

    let productAddButton = $.createElement('button') ; 
    productAddButton.innerHTML = 'ADD TO CART'; 
    productAddButton.className = 'btn btn-primary shop-item-button' ; 
    productAddButton.addEventListener('click' , function(){
        addProductToBasketArray(product.id) ; 
    })


    productDetailsContainer.append(productPriceSpan , productAddButton) ; 

    productContainer.append(productTitleSpan , productImageElem , productDetailsContainer) ;
    
    fragmentData.append(productContainer) ; 
}); 
    shopItemsContainer.append(fragmentData) ;


function addProductToBasketArray(productId){
    let mainProduct = allProducts.find((product) => {
        return product.id === productId 
    })
    userBasket.push(mainProduct)

    basketProductsGenerator(userBasket)
    calcTotalPrice(userBasket) ; 

    
}

function basketProductsGenerator(userBasketArray){
    basketProductsContainer.innerHTML = ' '
    userBasketArray.forEach(product => {
        let basketProductContainer = $.createElement('div') ;
        basketProductContainer.classList.add('cart-row')

        let basketProductDetailsContainer = $.createElement('div') ;
        basketProductDetailsContainer.className = 'cart-item cart-column'

        let basketProductImg = $.createElement('img') ;
        basketProductImg.setAttribute('src' , product.image) ; 
        basketProductImg.setAttribute('width' , '100') ; 
        basketProductImg.setAttribute('height' , '100') ; 
        basketProductImg.classList.add('cart-item-image')

        let basketProductTitleSpan = $.createElement('span');
        basketProductTitleSpan.classList.add('cart-item-title')
        basketProductTitleSpan.innerHTML = product.title ; 

        basketProductDetailsContainer.append(basketProductImg , basketProductTitleSpan) ; 

        let basketProductPriceSpan = $.createElement('span') ;
        basketProductPriceSpan.className = 'cart-price cart-column'
        basketProductPriceSpan.innerHTML = product.price ; 

        let basketProductInputsContainer = $.createElement('div') ;
        basketProductInputsContainer.className = 'cart-quantity cart-column'

        let basketProductInput = $.createElement('input') ;
        basketProductInput.className = 'cart-quantity-input' ;
        basketProductInput.value = product.count; 
        basketProductInput.setAttribute('type' , 'number') ; 
        basketProductInput.addEventListener('change' , function(){
            updateProductCount(product.id , basketProductInput.value)
        })

        let basketProductRemoveBtn = $.createElement('button') ;
        basketProductRemoveBtn.className = 'btn btn-danger'
        basketProductRemoveBtn.innerHTML = 'Remove' ;
        basketProductRemoveBtn.addEventListener('click' , function(){
            removeProductFromBasket(product.id) ; 
        })


        basketProductInputsContainer.append(basketProductInput , basketProductRemoveBtn) ; 
        basketProductContainer.append(basketProductDetailsContainer , basketProductPriceSpan , 
            basketProductInputsContainer 
        )
        basketProductsContainer.append(basketProductContainer) ; 
    })

}

function removeProductFromBasket(productId){
    userBasket = userBasket.filter(product => {
        return productId !== product.id ; 
    })
    basketProductsGenerator(userBasket)
}

removeAllProductsBtn.addEventListener('click' , function(){
    userBasket = []
    basketProductsGenerator(userBasket) ; 
})


function calcTotalPrice(userBasketArray){
    let TotalPriceValue = 0 ; 
    userBasketArray.forEach((product) => {
        TotalPriceValue += product.count * product.price ; 
    })
    cartTotalPriceElem.innerHTML = TotalPriceValue; 

}

function updateProductCount(productId , newCount){
    userBasket.forEach((product) => {
        if(product.id === productId){
            product.count = newCount ; 
        }
    })
    calcTotalPrice(userBasket) ; 
}