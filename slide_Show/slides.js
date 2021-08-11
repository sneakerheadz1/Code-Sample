// Source the images
let imageBank = ["baseball.jpeg", "bball.jpeg", "golf.jpeg", "tennis.jpeg", "soccer.jpeg"]
// variable to hold the length of entire array
var arrayLength = imageBank.length -1
// variable to act as a counter in our array
var counter = 0;

let slideShow = (x) => {
   // variable to increase the index in the array
    counter += x

    // go back to 0 if counter gets above the index in array
    if(counter < 0){
        counter = arrayLength
    }if (counter > arrayLength){
        counter = 0
    }

   // variable to grab the element slide-show id from html
    let slideShow = document.querySelector("#slide-show")
 // src the slideshow to be whatever index in the array we are at
    slideShow.src = imageBank[counter]
}