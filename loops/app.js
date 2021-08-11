/* loops are used to repeat instructions or unless a certain condition is met,
for loops have four steps 1. declare variable 2. set the condition to be tested 3. set the work to be done is condition is true
4. what to do each iteration. */

// for (let counter = 0; counter <= 10 ; counter++ ){ // parenthesis are for the conditions
//     console.log(counter) // work to be done is in the curly braces
// }

// for (let counter1 = '#'; counter1 <= 6; counter1+='#'){
//     console.log(counter1)
// }

// for (let counter2 = '#'; counter2.length  <=6; counter2+='#'){
//     console.log(counter2)
// }

// for (let counter3 = 6; counter3 <= 60; counter3+=3){
//     console.log(counter3)
// }


// for (let counter3 = 0; counter3 <= 40; counter3++){
//      if (counter3 %2 ==0){
//          console.log(counter3)
//      }
// }

//  Lab for today
// 1. Write a for loop for the given output:

//  1, 3, 5, 7, 9
//  2, 4, 6, 8, 10
// 2. write a for loop that iterates between 0 and 10 and prints all even numbers.

// HINT: Read on Module/Remainder operator. 

// 3. Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers. 

// Treat 2 as an even number and 1 & 3 as odd

// for (let counter3 = 1; counter3 <= 10; counter3+=2){
//      console.log(counter3)   
// }
// console.log()
// for (let counter4 = 2; counter4 <= 10; counter4+=2){
//     console.log(counter4)   
// }
// console.log()
// for (let counter5 = 0; counter5 <= 10; counter5++){
//      if (counter5 %2 ==0){
//          console.log(counter5)
//      }
// }


// 3. Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers. 
// console.log()

// example 1 

// for(var numz = 1; numz <= 20; numz++){
//     if(numz %2==0){
//         console.log(numz+'Even')
//     }
//     if(numz %2>0){
//         console.log(numz+'Odd')
//     }
//     divisor = 0
//    for(var prime= 1; prime <= numz; prime++ ){
//        if(numz % prime == 0)
//                 divisor=divisor+1;
//    }
//    if(divisor == 2){
//        console.log(numz + " this is a prime number");
//    }
// }




//Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers

// for (counter = 0; counter <= 20; counter++) {
//         if(counter%2 == 0) {
//             console.log(counter + " is a even number")
//         }
//         if (counter%2==1) {
//             console.log(counter + " is a odd number")
//         }
    
//         if (counter%2  == 1 && counter / 1 == counter ) {
//                 console.log(counter + " is a prime number");
//         }
    
//     }



    // 2, 3, 5, 7, 11, 13, 17, 19,