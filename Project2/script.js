let playerArea = document.querySelector(".myplayer")
let media = playerArea.querySelector("video") ; 
// console.log(playerArea , media)
let controls = playerArea.querySelector(".myplayer__controls") ; 

let play = controls.querySelector(".play") ; 
let rwd = controls.querySelector(".rewind") ; 
let fwd = controls.querySelector(".forward") ; 
let timerArea = controls.querySelector(".timer") ;

//4 - 
let fullscreen = controls.querySelector(".fullscreen") ; 

fullscreen.addEventListener("click" , function(){
    
    if(!document.fullscreenElement){
        if(playerArea.requestFullscreen){
            playerArea.requestFullscreen() ; 
        }
        else if(playerArea.mozFullScreenElement){
            playerArea.mozFullScreenElement() ;        
        }
        else if(playerArea.msFullScreenElement){
            playerArea.msFullScreenElement() ;        
        }
        else if(playerArea.webkitFullScreenElement){
            playerArea.webkitFullScreenElement() ;        
        }
    }
    else{
        if(document.exitFullscreen){
            document.exitFullscreen() ; 
        }
        else if(document.mozCancelexitFullscreen){
            document.mozexitFullscreen() ; 
        }

        else if(document.msCancelexitFullscreen){
            document.msexitFullscreen() ; 
        }

        else if(document.webkitCancelexitFullscreen){
            document.webkitexitFullscreen() ; 
        }
    }


    // console.log(document.fullscreenElement) ; 
})


//3 - 
let volumeIcon = controls.querySelector(".volume .icon")
let volumeProgressBar = controls.querySelector(".volume .volume__progress")
let volumeProgressBarInput = volumeProgressBar.querySelector("input") ; 

media.volume = .5 ; 


volumeIcon.addEventListener("click" , function(){
    volumeProgressBar.classList.toggle("active") ; 

})
volumeProgressBarInput.addEventListener("input" , function(){
    media.volume = (this.value / 100) ; 
    this.style = `background : linear-gradient(90deg, rgba(230, 126, 34, 1) ${this.value}%, #e1e1e1 0%);`

})


// 2 - 
let CurrentTime = timerArea.querySelector(".currentTime")
let videoTime = timerArea.querySelector(".videoTime")  

let timerBar = controls.querySelector(".controls__progressbar-current")


media.addEventListener("timeupdate" , function(){
    CurrentTime.textContent = getTime(media.currentTime)

    let barLength = (media.currentTime / media.duration) * 100 ;
    // console.log(barLength);

    timerBar.style = `background : linear-gradient(90deg, rgba(230, 126, 34, 1) ${barLength}%, #e1e1e1 0%); `
    timerBar.value = barLength ; 
    // console.log(timerBar.value) ; 
})

timerBar.addEventListener("input" , function(){
    console.log(this.value) ; 
    media.currentTime = (this.value / 100) * media.duration ; 
    // console.log((this.value / 100) * media.duration)
})


function getTime(time){
    // console.log(media.currentTime) ;
    // let minutes = Math.floor(media.currentTime / 60)
    // let seconds = Math.floor(media.currentTime - (minutes * 60))
    
    let minutes = Math.floor(time/ 60) ; 
    let seconds = Math.floor(time - (minutes * 60))
    let minuteValue ; 
    let secondsValue ; 
    if(minutes < 10){
        minuteValue = '0' + minutes ; 
    }
    else{
        minuteValue = minutes ; 
    }
    if(seconds < 10){
        secondsValue = '0' + seconds
    }
    else{
        secondsValue = seconds ; 
    }
    // CurrentTime.textContent = minuteValue + ":" + secondsValue
    return minuteValue + ":" + secondsValue

}

// 1 - 
play.addEventListener("click" , function(){
    videoTime.textContent = getTime(media.duration);
    // console.log("click video")
    // console.log(media.__proto__)
    // console.log(media.paused) ; 
    if(media.paused){
        togglePlayIcon(); 
        media.play()
    }
    else{
        togglePlayIcon() ; 
        media.pause() ; 
    }
})
function togglePlayIcon(){
    let icon = play.querySelector('i')
    icon.classList.toggle('ion-md-pause') ;
    icon.classList.toggle("ion-md-play") ; 
}

rwd.addEventListener("click" , function(){
    media.currentTime = media.currentTime - 5 ; 
})

fwd.addEventListener("click" , function(){
    media.currentTime = media.currentTime + 5 ; 
})
