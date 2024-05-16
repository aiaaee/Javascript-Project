const hero = document.querySelector(".hero");
const text = hero.querySelector("h1") ;
const walk = 500 ; // 500px

hero.addEventListener("mousemove" , function(event){
    // console.log(event)
    const {offsetWidth : width , offsetHeight : hieght } = hero
    // console.log(width , hieght)
    let {offsetX : x , offsetY : y} = event ; 
    // console.log(x , y) ; 

    // console.log(event.target.offsetLeft) ; 
    x += event.target.offsetLeft ; 
    y += event.target.offsetTop  ; 
    // console.log(event.target.offsetTop)

    const xWalk = Math.round((x / width * walk) - (walk / 2 )) ; 
    const yWalk = Math.round((y / hieght * walk) - (walk / 2 ));
    // console.log(x)
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(238 , 82 , 83 , .7) , 
    ${xWalk * -1}px ${yWalk}px 0 rgba(52 , 31 , 151 , .7) ,  
    ${yWalk}px ${xWalk * -1}px 0 rgba(243 , 104 , 224 , .7) ,
    ${yWalk * -1}px ${xWalk}px 0 rgba(254 , 202 , 87 , .7) 
    `
    // console.log(xWalk , yWalk)
})