let startBox = document.querySelector(".start-box")
let inputCounter = startBox.querySelector("#input-counter") ; 
let startCounter = startBox.querySelector("#start-counter") ; 
// console.log(inputCounter , startCounter)
let errorElement = document.querySelector("#error-message")
let timercircle = document.querySelector(".c100")
let timerNum = document.querySelector('.c100 > span');
let loadingMessage = document.querySelector(".message .loading")
let successMessage = document.querySelector(".message .success")


startCounter.addEventListener("click" , function(e){

    let seconds = parseInt(inputCounter.value)
    
    if(isNaN(seconds)){
        // console.log("this is a nan")
        errorElement.textContent = "زمان را به درستی وارد کنید ."
        errorElement.classList.add("active") ; 
        return ; 
    }
    errorElement.classList.remove("active")
    
    startBox.classList.remove("active")
    timercircle.style.display = "block" ; 
    timerNum.textContent = seconds
    loadingMessage.style.display = "block" ; 
    successMessage.style.display = "none" ; 

 
     let originalSeconds = seconds ; 
     let lastPercent = 'p100' 
     let timeId = setInterval(() => {
        if(lastPercent){
            timercircle.classList.remove(lastPercent)
        }
        if(seconds <= 0 ){
            clearInterval(timeId) ; 
            startBox.classList.add("active")
            timercircle.style.display = "none" ; 
            loadingMessage.style.display = "none"
            successMessage.style.display = "block"
            inputCounter.value = ""
            return 
            // timercircle.classList.remove(lastPercent)
        }
        
   





         seconds -= 1 ;
         let percent = Math.abs(Math.floor((((originalSeconds - seconds) / originalSeconds) * 100) - 100))
         // console.log(percent)
         lastPercent = `p${percent}`
         timercircle.classList.add(`p${percent}`)
         timerNum.textContent = seconds 
     }, 1000);
})
