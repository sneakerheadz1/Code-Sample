//  Author: Domonic Moore
//  Functions : JavaScript


// Homework Assignment
// Requirements

// Please write code that implements various functions, following the requirements in the list below:



//  1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

console.log("******************************************************")

// let maxOfTwoNumbers = (num1, num2) => { // create function add parameters for min and max
//    let lowNum = num1 < num2
//    let highNum = num2 > num1
//     if(num1 < num2){
//         console.log(" This is the lower number: " + lowNum +  "  "+ num1)
//     }else if ( num1 === num2){
//         console.log("These numbers are equal: ")
//     }else {
//         console.log("This is the Higher number: " + highNum  + "  "+  num2)
//     }
// }

let maxOfTwoNumbers = (num1, num2) => { // create function add parameters for min and max
    let max = Math.max(num1,num2)                // create variable to identify max number using Math. method
    // console.log("This is the Higher number: " + max)
 }
maxOfTwoNumbers(21, 25)


//  2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
console.log("******************************************************")

let maxOfThree =(n1 ,n2 ,n3) =>{
    let highestNum = Math.max(n1, n2, n3)
    // console.log("This is the highest of three numbers: " + highestNum)
}

maxOfThree(21,72,13)

//  3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
console.log("******************************************************")

let isCharacterAVowel = (letter) => {               // create function input 1 parameter for letter
    let vowel = ["a", "e", "i", "o", "u"]               // create an array variable for letters that are vowels
    // console.log(vowel)  >>> sanity check
    for(let counter = 0; counter < vowel.length; counter++){      // create a for loop to iterate through array to identify a vowel 
    //    console.log(vowel[counter])  >>> sanity check
        if(letter == vowel[counter] ){                                                        // create a if statement to check if letter is == to vowel
            // console.log("This is  a vowel " + letter )
         }
    }
}
isCharacterAVowel("u")


//  4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
console.log("******************************************************")
let sumArray = (val1, val2, val3,) =>{
    let total = 0                                         // create variable to get sum total
    let addArray = [];
    addArray.push(val1,val2,val3)
    // console.log(addArray)  >>> sanity check
    for (var i = 0; i < addArray.length; i++) {  // iterate through the array 
        total += addArray[i]                               // assign variable total a new value and add to index value
        console.log(total);
     }
} 
// sumArray(1,2,3)
console.log()
console.log()

let multiplyArray = (v1, v2, v3,) =>{
    let total = 1                                        // create variable to get sum total
    let multiArray = [];
    multiArray.push(v1,v2,v3)
//  console.log(multiArray) //>>> sanity check
    for (var i = 0; i < multiArray.length ; i++) {  // iterate through the array 
    total *= multiArray[i]                                // assign variable total a new value and add to index value
         console.log(total);
    }
} 
// multiplyArray(2,4,8)


//  5. Write a function that returns the number of arguments passed to the function when called.
let returnFunction = (a,b,c) => {
    let argSum = [a,b,c]
    let total = 0
    for(var counter = 0; counter < argSum.length ; counter ++) {
        total += counter
       console.log(total)
    }
    // console.log(argSum)
}
returnFunction("movies", "Water", "animals " )

//  6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
console.log("******************************************************")
let  reverseString = (string)=>{
    let str = string
    console.log(str.split('').reverse().join(''))
}
// reverseString("Tommy Boy")

//  7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
console.log("******************************************************")

let wrdLenght = 0

let findLongestWord = (word, word2,word3) => {

    let w1 = word[0].length 
    let w2 = word[1].length 
    let w3 = word[2].length 
    let lngWord = []
    // lngWord.push(word,word2,word3)
    // console.log(lngWord)
    lngWord.map((value) => {
        let w1 = lngWord[0].length 
        let w2 = lngWord[1].length 
        let w3 = lngWord[2].length 
        if( w1 > w2){
            wrdLenght = w1
        }else if (w2 > w1){
            wrdLenght = w2
        }else{
            wrdLenght = w3
        }
        // console.log(wrdLenght)
    })
}
findLongestWord('ant', 'tom', 'nancyKrogreg' )

//  8. Write a function filterLongWords that takes an array of 
// words and a number i and returns the array of words that are longer than i characters long.

let filterLongWords = (string, i) =>{
    let lngArray = [string, i]
    // console.log(lngArray[1])
        if(string.length > lngArray[1]){
            console.log(string + " " + string.length)
        }
        else{
            console.log("word is shorter that number by" +" " + (lngArray[1] - string.length))
        }
    
    // console.log(lngArray)
}
// filterLongWords("football is life", 20)