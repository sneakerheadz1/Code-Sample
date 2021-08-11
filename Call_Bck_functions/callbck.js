//call back function declaration
// var foo =() =>{
//     console.log('I am the foo function')
// }
// foo()

// //function call
// var bar =(callbackFunction) => {
//     console.log(callbackFunction)
// }

// bar(foo)

//  Electric mixer

var electricMixer = (attachment, attachemtn2, attachemtn3) =>{
    console.log("The mixer is now " + attachment(),+ "the mixer will be: " + attachment2() +" next  " + "after that it will " + 
    attachment2())

}

// electricMixer()

//  Attachments
var spirilaizer = () => {
    return "Sprializeing"
}

var slicing = () =>{
    return "Slicing"
}

// electricMixer(slicing)


// electricMixer(slicing,spirilaizer,


setInterval(() =>{
    console.log("Hello")
}, 2000)  // time intraval is in mili-sec