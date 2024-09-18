let contextMenu = document.querySelector(".context-menu"); 


document.body.addEventListener("contextmenu" , function(e){
    e.preventDefault()
    contextMenu.style.top = `${e.clientY}px`
    contextMenu.style.left = `${e.clientX}px`
    contextMenu.style.display='block'
})


document.body.addEventListener("click" , function(e){
    e.preventDefault() ;
    contextMenu.style.display = 'none'
})
