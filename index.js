window.addEventListener('click', function () {
    console.log("== The window was clicked")
})

function listenerMaker (){
    return function () {
        console.log("== Inside listenerMaker function")
    }
}

function handleButtonClick (event) {
    console.log("== A button was clicked, event:", event)
    var box = event.target.parentNode
    box.classList.toggle('highlighted')
    console.log(" -- the event target:", event.target)
    console.log(" -- current event target:", event.currentTarget)
}

var buttons = document.getElementsByClassName('in-box-button')
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', handleButtonClick)
}

var firstBox = document.querySelector('.box')
firstBox.addEventListener('click', function (event) {
    console.log(" -- the event target:", event.target)
    console.log(" -- current event target:", event.currentTarget)
})