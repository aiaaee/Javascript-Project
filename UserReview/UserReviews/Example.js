let dbName = 'test'
let btn = document.querySelector('button') ; 
let db = null

window.addEventListener("load" , function(){
    let openDB = indexedDB.open(dbName ,12) ;
    ResponseDb(openDB) ; 
})



btn.addEventListener('click' , function(){
    let newUser = {
        userId : Math.floor(Math.random() * 9999) , 
        name : "Amin" , 
        age : 19 , 
        color :"red" 
    }
    let tx = db.transaction('testUser' , 'readwrite') ; 
    let store = tx.objectStore('testUser') ; 
    let request = store.add(newUser) ; 
    ResponseDb(request) ;
    
    console.log(request) ; 

})





function ResponseDb(db_name){
    db_name.addEventListener("success",  function(e){
        console.log('success !' , e) ; 
    })
    db_name.addEventListener("error" , function(e){
        console.log('error' , e) 
    })
    db_name.addEventListener('upgradeneeded' , function(e){
        console.log("upgrade : " , e)
        db = e.target.result ; 
        if(!db.objectStoreNames.contains('testUser')){
            db.createObjectStore('testUser' , {
                keyPath : 'userId'
            })
        } 
        // if(db.objectStoreNames.contains('testUser')){
        //     db.deleteObjectStore('testUser') ; 
        // }
    })
}


function RequestResponse(req_name){
    req_name.addEventListener("success",  function(e){
        console.log('success !' , e) ; 
    })
    req_name.addEventListener("error" , function(e){
        console.log('error' , e) 
    })
}
