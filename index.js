window.addEventListener('click', function () {
<<<<<<< HEAD
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
=======
  console.log("== The window was clicked")
  console.log("  -- event.target:", event.target)
  console.log("  -- event.currentTarget:", event.currentTarget)
})

function listenerMaker() {
  return function () {
    console.log("== Inside listenerMaker's function")
  }
}

function handleButtonClick(event) {
  console.log("== A button was clicked, event:", event)
  console.log("  -- event.target:", event.target)
  console.log("  -- event.currentTarget:", event.currentTarget)
  var box = event.target.parentNode
  box.classList.toggle('highlighted')
}

var buttons = document.getElementsByClassName('in-box-button')
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleButtonClick)
>>>>>>> 26e26435a90e9db18761b85c82e9a91247895e7d
}

var firstBox = document.querySelector('.box')
firstBox.addEventListener('click', function (event) {
<<<<<<< HEAD
    console.log(" -- the event target:", event.target)
    console.log(" -- current event target:", event.currentTarget)
})

var link = document.getElementById('website-link')
link.addEventListener('click', function(event){
    console.log("== the link was clicked")
    event.preventDefault()
})
=======
  console.log("== The first box was clicked")
  console.log("  -- event.target:", event.target)
  console.log("  -- event.currentTarget:", event.currentTarget)
  event.stopPropagation()
})

var link = document.getElementById('website-link')
link.addEventListener('click', function (event) {
  console.log("== The link was clicked")
  event.preventDefault()
})
>>>>>>> 26e26435a90e9db18761b85c82e9a91247895e7d
