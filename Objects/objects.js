//  Objects are a dataset that have a key and value. 
//  objects use curly braces
// objects use .notation
// To get data out of object, call the objects name and ket value with a (.) (ex: console.log(car.tires)
//  To create new key >> car.year = "1999"

let car = {
    tires: 4,
    make: "Honda",
    model: "Accord",
    color: "Black",
    vin: 3481234567891232
}
// console.log(car)

//  Array inside Objects use forin loop to loop through an array
// const adventurer = {
//     name: "Timothy",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "Tums"],
//     companion: {
//         name: "Velma",
//         type: "Bat"
//     }
// }

//  Add vouge  to the end of belongings array
// adventurer.belongings.push("Vouge")

//  add an object inside another object
const adventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat"
    },
    companion2: {
        name: "Aurthor",
        type: "Insect",
        belongings: ["Scuba Tank", "Joe Rogan", "Health Insurance"]
    }
}

// console.log(adventurer.companion)
// console.log(adventurer.companion.name)

// change companniions name to susan =>
// console.log=>
// add another object name companion2
// companion2 should have a name and a type of insect

adventurer.companion.name = "Susan"
// console.log(adventurer.companion.name)


// iterate over an array in an object

for(var i = 0; i < adventurer.belongings.length; i++){
    // console.log(adventurer.belongings[i])
}

//  Array of objects
const movies = [
    {title: "Paul Blart"},
    {title: "Get Hard"},
    {title: "Mortal Kombat"}
]

movies.map((objectsInTheArray)=>{
    // console.log(objectsInTheArray.title)
})

// assigning a key to a variable
const monster = {
    name: "Harry",
    action: "Boo!"
}
const someName = "name" // can use outside scope of object/array
monster.name                      // can use outside scope of object/array
// console.log(monster[someName])

//  loop over object >>> for in loop
const movie = {
    title: "Matrix",
    genre: "Sci-fi",
    year: 2000
}
for (let key in movie){
    console.log(movie[key])
}

//  adding to objects and arrays without going directly in code
var cars = ["Honda"]
var add= (newItemInArray)=> {
    cars.push(newItemInArray)
    // console.log(cars)
}
// add("Toyota")
// add("Mazda")

