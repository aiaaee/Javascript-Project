const note = document.querySelector(".nowplaying")
window.addEventListener("keydown" , function(e){
    // 1 
    // console.log(e)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(e.keyCode)
    console.log(key)

    if(! key) return ; 
    const keyNote = key.getAttribute('data-note')
    // console.log(keyNote) 
    note.innerHTML = keyNote
    
    //2 
    key.classList.add("playing")

    //3 

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // console.log(audio)
    audio.currentTime = 0 ; 
    audio.play()
})

//2 
const keys = document.querySelectorAll(".key")
console.log(keys)

keys.forEach(key => key.addEventListener("transitionend" , removeTransition))

function removeTransition(){
    // console.log("Finish")
    this.classList.remove('playing')
}


//3 
const hints = document.querySelectorAll(".hints")

hints.forEach(function(element , index){
    // console.log(element , index)
    element.style = `transition-delay : ${index * 50}ms `
    // elment.setAttribute("style" , `transition-delay : ${index * 50}ms`)
})