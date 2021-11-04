var allWords = [];
var currentWord = 0;

var wordsInput = document.getElementById('words-input')
//wordsInput.addEventListener('input', handleNewWordsEntered) calls whenever the user types a character
wordsInput.addEventListener('change', handleNewWordsEntered) //calls whenever the user changes what is in the wordsInput text box

function handleNewWordsEntered(event) {
  var text = event.currentTarget.value;
  console.log("== Inside handleWordsEntered() text:", text)
  //text.indexOf('fox')
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  console.log("== all words", allWords)
  currentWord = 0;
}

function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.textContent = word;
  if (highlightColor) {
  	wordElem.classList.add('highlight');
  	wordElem.classList.add(highlightColor);
  }
  return wordElem;
}

function getHighlightColor() {
	var selectedHighlightColorInput = document.querySelector('input[name="highlight-color"]:checked');
  return selectedHighlightColorInput.value;
}

function handleAddWordButtonClick(event){
  console.log("== An add word button was clicked")
  var word = allWords[currentWord]
  if(word){
    var everyNthSelect = document.getElementById('every-nth-select')
    var everyN = Number.parseInt(everyNthSelect.value) //convert string value into number
    console.log("  -- everyN:", everyN)
    var highlightColor = null
    
    if(!((currentWord+1) % everyN)){
      highlightColor = getHighlightColor()
    }

    console.log("  -- word:", word)
    var wordElem = generateWordElem(word, highlightColor)
    var container = event.currentTarget.parentNode.parentNode
    var wordsContainer = container.querySelector('.words-container')
    wordsContainer.appendChild(wordElem)

    currentWord = (currentWord + 1) % allWords.length
  }

}

var buttons = document.getElementsByClassName('add-word-button')
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', handleAddWordButtonClick)
}