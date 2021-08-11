console.log("Working")

// window.alert("Whats up Homie")

// prompt("What is your name?")

// document.write()

// use document.querySelector to grab HTML elements
// assign html elements to a variable
let messageBox = document.querySelector("#message")
// console.log(messageBox)

let showMessage = () => {
    messageBox.innerHTML = "I am doing great, thanks for asking. "
}

let catImage = document.querySelector("#cat")
// console.log(catImage)

let oppSlider = () => {
    catImage.src = "mouse.jpeg"
}

let revSlider = () => {
    catImage.src = "cat.jpeg"
}











// Methods
// var dog ={ >> this is the object 
//     breed: "Boxer",
//     bark : ()=>{ this is a function inside the object which makes is a method
//         console.log("")
//     }
// }
// dog.bark() >> back is called using dot notation