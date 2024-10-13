
let $ = document
let backBtn = $.querySelector('#back')
let shoesTitle = $.querySelector('h1');
let shoesDesc = $.querySelector('p');
let shoesImage = $.querySelector('img');

console.log(shoesTitle);

let productsArray = [
    { id: 1, title: 'Sport Shoe', price: 53, img: 'images/1.png' },
    { id: 2, title: 'Women Shoe', price: 81, img: 'images/2.png' },
    { id: 3, title: 'Boots', price: 34, img: 'images/3.png' },
]

let locationParams = new URLSearchParams(location.search) ; 
let mainProductId = locationParams.get("id") ; 

let mainProductObject = productsArray.find((product) => {
    return product.id === Number(mainProductId) ; 
})

if (mainProductObject){
    shoesTitle.innerHTML = mainProductObject.title
    shoesImage.setAttribute('src' , mainProductObject.img) ; 
    
}
else{
    location.href = 'http://127.0.0.1:3000/source/index.html'
}


backBtn.addEventListener('click', function () {
    history.back()
})
