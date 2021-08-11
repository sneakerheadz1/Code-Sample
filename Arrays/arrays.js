// Arrays is a set of data
// Arrays in JS can take any data types
// Arrays start at index 0

// var nameOfArray = []


// var foods = ["Beef", "Elf", "Fish"]

// console.log(foods)

// Array Methods
// .pop() => removes the last element from the array

// .push() add item to end of array >> add item into parameter .push("Oranges")

// shift removes the first element in the array
// .unshift() adds items to the start of the array include a parameter .unshift("Apples")
// foods.shift()
// foods.unshift("Apples")
// console.log(foods)

// .length gives the length of the array / elements in the array

// looping through arrays

var cars = ["Ashton", "Bmw", "Benz", "Porsche", "Range"]

for(var counter = 0;  counter < cars.length; counter ++){
    console.log(cars[counter])
}

// .map() takes in parameter =-= call back function and maps over array and does function for each element in array
cars.map((ItemInTheArray) => {
    console.log(ItemInTheArray)
})