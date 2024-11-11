let $ = document
let btn = $.querySelector('.button_submit') ;
let form = $.querySelector('.Auth_form'); 
let fieldset1 = $.querySelector('.before_auth')
let fieldset2 = $.querySelector('.after_auth')
let username = form.querySelector('.Username')
let firstname = form.querySelector('.Firstname')
let stars = form.querySelector('.Stars')
let comment = form.querySelector('.Comment')
let password = form.querySelector('.Password')
let lastname = form.querySelector('.Lastname') ; 
let hidden = 'hidden'
let dbName = 'AuthDB'

let userNameValue  ;
let firstNameValue ; 
let starsValue ; 
let commentValue ; 

let db = null ; 

form.addEventListener('submit' , function(e){
    e.preventDefault() ; 
    fieldset1.classList.add(hidden) ;
    fieldset2.classList.remove(hidden) ;
})

window.addEventListener("load" , function(){
    let createNewDB = indexedDB.open(dbName , version=6) ; 
    ResponseDatabase(createNewDB)
})

function ResponseDatabase(database_name){
    database_name.addEventListener('success' , (event) => {
        console.log("Success" , event) 
    }); 
    database_name.addEventListener('error' , function(){
        console.error('Error')
    })
    database_name.addEventListener('upgradeneeded' , (event) => {
        db = event.target.result ; 
        console.log('Upgraded : ' , event)
        if(! db.objectStoreNames.contains('User')){
            db.createObjectStore('User') ; 
        }
        // if( db.objectStoreNames.contains('User')){
        //     db.deleteObjectStore('User')
        // }
    })
}

window.addEventListener('keypress' , function(){
    userNameValue = username.value ; 
    firstNameValue = firstname.value; 
    starsValue = stars.value ; 
    commentValue = comment.value ; 
})


btn.addEventListener('click' , function(){
    let newUser = {
        id :Math.floor(Math.random() * 9999 ) ,
        name : userNameValue , 
        firstname : firstNameValue , 
        stars : starsValue , 
        comment : commentValue 
    }
    console.log(newUser);
    ClearInputs()
})

function ClearInputs(){
    lastname.value = ''
    password.value = ''
    username.value = ''
    firstname.value = '' 
    stars.value = 0 
    comment.value = ''
}
