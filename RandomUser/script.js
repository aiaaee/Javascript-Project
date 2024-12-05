let btn = document.querySelector('.ClickUser'); 
let display = document.querySelector(".display") ; 
let imgDisplay = document.querySelector(".display img")
let paragraphDisplay = display.querySelector("p") ; 
btn.addEventListener("click" , function(){
    fetch('https://randomuser.me/api/')
    .then(result => {
        return result.json() ;
    })
    .then(data => {
        console.log(data.results[0]) ; 
        display.style.display='block'
        paragraphDisplay.innerHTML = `Hi my name is ${data.results[0].name.first}  ${data.results[0].name.last} `
        return data.results[0].picture
    })
    .then(picture => {
        imgDisplay.src = `${picture.large}`
    })
})
