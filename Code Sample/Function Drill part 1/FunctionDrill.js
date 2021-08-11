//  Doms hw

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
// Test Cases:
// Expect sumOfNums([1,2,3,4,5]) to equal 15
// Expect sumOfNums([0,0,5]) to equal 5
// Expect sumOfNums([-1,0,1])) to equal 0
// Expect sumOfNums([])) to equal 0

let numArray = [];
numArray[0]= []
numArray[1]= []
numArray[2]= []
numArray[3]= []
numArray[4]= []

let sumOfNums = () =>{
    let reducer = (acc, current) => acc + current;
    // console.log(numArray.reduce(reducer));
}
// sumOfNums()
//^^^^ correct

// *******************come back and re-do***********
// let sumOfNums = (num1,num2,num3,num4,num5) =>{
//     let total = 0                                        
//     let numArray = [];
//     // let numA =  numArray[0];
//     // let numB= numArray[1];
//     // let numC = numArray[2];
//     // let numD= numArray[3];
//     // let numE = numArray[4];
//     numArray.push(num1,num2,num3,num4,num5)
    
//     for (var i = 0; i < numArray.length; i++) {  
//         total += numArray[i]                               
//         console.log(total);
//      }
// }
// sumOfNums(1,2,3,7,6)
// *******************come back and re-do***********


// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
// greater (i.e. greater than but not equal to) than 10
// Test Case:
// Expect numsGreaterThanTen([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100]) to equal [11, 20, 100]

let greaterArray = [];
greaterArray[0]= [-1]
greaterArray[1]= [9]
greaterArray[2]= [9.5]
greaterArray[3]= [11]
greaterArray[4]= [99]

let numsGreaterThanTen = greaterArray.filter(element  => element >  10);
// console.log(numsGreaterThanTen)

// ******************************

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
// `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
// Test Cases:
// Expect allGreaterThanTen([11, 20, 100]) to equal true
// Expect allGreaterThanTen([9, 100, 299])) to equal false
// Expect allGreaterThanTen([1, 2])) to equal false
// Expect allGreaterThanTen([10])) to equal false
// Expect allGreaterThanTen([])).to.equal(true);

 let allGreaterArr = [];
allGreaterArr[0]= []
allGreaterArr[1]= [9]
allGreaterArr[2]= [9.5]
allGreaterArr[3]= [11]
allGreaterArr[4]= [99]

// let allGreaterThanTen = allGreaterArr.map((elements) =>{
    // if(elements > 10){
    //     console.log(true)
    // }else if(elements < 10){
    //     console.log(false)
    // }else{
    //     console.log(true)
//     }
// })
// console.log(allGreaterThanTen)

// ******************************


// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
// Test Cases:
// Expect wordsWithAtLeastFiveLetters(['alphabet', 'banana', 'carrot', 'doe', 'egg'])
// to equal ['alphabet', 'banana', 'carrot']

let wordsWithAtLeastFiveLetters = (words,words2,words3,words4) =>{
    let wrdsum = [];
    
    // wrdsum[0] = words
    // wrdsum[1] = words2
    // wrdsum[2] = words3
    // wrdsum[3] = words4
    wrdsum.push(words,words2,words3,words4)
    // console.log(wrdsum)
    wrdsum.map((word) =>{
        if(word.length > 5){
            // console.log(word)
        }
    })
}
wordsWithAtLeastFiveLetters('alphabet', 'banana', 'applePie', 'doe')

// ******************more effecient******************************
// let wordsWithAtLeastFiveLetters = (wrdsum) =>{
//     wrdsum.map((word) =>{
//         if(word.length > 5){
//             // console.log(word)
//         }
//     })
// }
// wordsWithAtLeastFiveLetters(['alphabet', 'banana', 'applePie', 'doe']);

// let wordsWithAtLeastFiveLetters = (wrdsum) =>{
//     wrdsum.map((word) =>{
//         if(word.length > 5){
//             // console.log(word)
//         }
//     })
// }
// let words = ['alphabet', 'banana', 'applePie', 'doe'];
// wordsWithAtLeastFiveLetters(words);
// ******************more effecient******************************


// ***********************************************
// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
// `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
// Test Cases:
// Expect allStartingWithA(['apple', 'alligator', 'Arkansas'])) to equal true
// Expect allStartingWithA(['Amy', 'Bob'])) to equal false
// Expect allStartingWithA([]) to equal 

// let  allStartingWithA = (wordwithA) =>{
//     let wrdHolder = [];
//     wordwithA.map((word) =>{
//         // console.log(word) 
//          if(word.charAt(0) == "a" || word.charAt(0) == "A"){
//           wrdHolder.push(word)
//         //  console.log(wordwithA.length - 1)
//          }
//          if (wrdHolder.length ===  wordwithA.length -1){
//             //  console.log(true)
//          }else {
//             //  console.log(false)
//          }
//      })
// }
// // allStartingWithA(['apple', 'Alligator', 'bob'])

let  allStartingWithA = (wordwithA) =>{
    let wrdHolder = [];
    wordwithA.map((word) =>{
        // console.log(word)
         if(word.charAt(0) == "a" || word.charAt(0) == "A"){
        //   wrdHolder.push(word)
        //  console.log(wordwithA.length)
         }
     })
         if (wrdHolder.length ===  wordwithA.length){
            //  console.log(true)
         }else {
            //  console.log(false)
         }
        //  if(wordwithA.length <= 0) {
        //     return true;
        // }
}
// allStartingWithA(['apple', 'Alligator', 'ann'])



// ***********************************************
// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
// (case-insensitive), `false` otherwise
// Test Cases:
// Expect anyStartingWithB(['Amy', 'Bob']) to equal true
// Expect anyStartingWithB(['apple', 'alligator', 'Arkansas'])) to equal false
//const anyStartingWithB = function (words) {
// This last set of functions are all related to one another! Use functions 7 to solve function 8,
// use function 8 to solve 9, 10, and 11.

let  anyStartingWithB = (anywithB) =>{
    let wrdHolder = [];
    // let wrdtrash = [];
    // let value = true
    anywithB.map((words) =>{
        // console.log(word)
         if(words.charAt(0) == "b" || words.charAt(0) == "B"){
          wrdHolder.push(anywithB)
        //  console.log(wrdHolder)
         }
         else{
             wrdtrash.push(words)
            //  console.log(wrdtrash)
         }
     })
        //  if (wrdHolder.length ===  wrdtrash.length){
        //      console.log(true)
        //  }else {
        //      console.log(false)
        //  }
    
}
// console.log(anyStartingWithB(['apple', 'blligator', 'ann']))


// let  anyStartingWithB = (anywithB) =>{anywithB.some((words) =>{
//         console.log(anywithB) 

//         for(words in anywithB){
//              if(words.startsWith("b")){
//                console.log(true) 
//          }else {
//              console.log( false) 
//         }
//      })
// }
// anyStartingWithB(['apple', 'bill', 'bam'])



// ***********************************************
// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
// `false` otherwise
// Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
// Test Cases:
// Expect hasAtLeastNVowels('uncopywriteable', 0)) to equal true
// This case should be true as long as n is less or equal to 6
// Expect hasAtLeastNVowels('dangerous', 5) to equal false
// Expect hasAtLeastNVowels('banana', -1) to equal null


let vowel = "a, e, i, o, u"
let vowel2 = ['a','e','i','o','u']

let hasAtLeastNVowels =(input) =>{
    let bol = true
    let numArr = []
    let n = 0
    let string = [];
   input.map((word, num) =>{
      string.reduce(word)
      numArr.push(num)
      if (string[0].charAt() == vowel2[0]){
          n +=1
        //   console.log(n)
      }
   })
   if(n >= numArr){
    return bol
}
}
// hasAtLeastNVowels(["bnimal", 1])



// ***********************************************
// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
// vowels
// Test Cases:
// Expect wordsWithAtLeastTwoVowels(['alphabet', 'bun', 'can', 'doe', 'egg'])
// to equal ['alphabet', 'doe']

let wordsWithAtLeastTwoVowels = (strings) =>{
    let twoVowels = ['a','e','i','o','u'];
    let vCounter = 0;
    // let strArr = [];
    // for(let char of strings){
    //     if(char.includes(twoVowels)){
    //         vCounter++
    //         console.log(vCounter)
    //     }
    // }
    strings.map((str) => {
       for(let str of strings){
        //    strArr.push(str)
           console.log(str)
            if(twoVowels.includes(str)){
                vCounter++
                Console.log(str)
            }
       }
    })
     
}

wordsWithAtLeastTwoVowels(['alphabet', 'bun', 'can', 'doe', 'egg'])

// ***********************************************
// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
// Expect allHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas']) to equal true
// Expect allHaveAtLeastTwoVowels(['Al', 'Barbara']) to equal false
// Expect allHaveAtLeastTwoVowels(['Al', 'buck', 'can']) to equal false
// Expect allHaveAtLeastTwoVowels([]) to equal true


// ***********************************************
// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
// `false` otherwise.
// Test Cases:
// Expect anyHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas'])) to equal true
// Expect anyHaveAtLeastTwoVowels(['APPLE', 'bun', 'CAT'])) to equal true


// ***********************************************
// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
// `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
// Test Cases:
// Expect noneHaveTwoOrMoreVowels(['Al', 'buck', 'can'])) to equal true
// Expect noneHaveTwoOrMoreVowels(['Al', 'Barbara'])) to equal false
// Expect noneHaveTwoOrMoreVowels(['apple', 'alligator', 'Arkansas']) to equal false
// Expect noneHaveTwoOrMoreVowels([]) to equal true

// ***********************************************
// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
// tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
// return { cat: 3, horse: 5, elephant: 8}
// Test Cases:
// Expect buildObjectFromWords(['apple', 'banana', 'cranberry'])
// to equal {'apple': 5, 'banana': 6, 'cranberry': 9}