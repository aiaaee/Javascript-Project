
let $ = document ;
let autoCompleteWrapper = $.querySelector('.search-input') ; 
let searchInputElem = $.querySelector('input') ;
let autoCompleteBox = $.querySelector(".autocom-box") ;

searchInputElem.addEventListener('keyup' , function(){
    let searchValue = searchInputElem.value ; 
    if(searchValue){
        autoCompleteWrapper.classList.add("active")
        let filteredWords = suggestions.filter(function(word){
            return word.toLowerCase().includes(searchValue.toLowerCase()) 
        })
        suggestionWordsGenerator(filteredWords)
    }
    else{
        autoCompleteWrapper.classList.remove('active')
    }
})


function suggestionWordsGenerator(wordsArray){
    let listItemArray = wordsArray.map(function(word){
        console.log(word)
        return `<li>${word}</li>`
    })


    let CustomListItem 
    if (!listItemArray.length) {
        CustomListItem = `<li>${searchInputElem.value}</li>` 
    }
    else{
        CustomListItem = listItemArray.join('')        
    }

    autoCompleteBox.innerHTML = CustomListItem

    select()

}



function select(){
    let allListItems = autoCompleteBox.querySelectorAll('li')
    allListItems.forEach(function(wordItem){
        wordItem.addEventListener('click' , function(event){
            searchInputElem.value = event.target.textContent
            autoCompleteWrapper.classList.remove('active')
        })
    })
}
