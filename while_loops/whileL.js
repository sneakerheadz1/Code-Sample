//  While loop will run as long as the condition is true

// let a = 100;

// while( a >  0 ){
//     console.log(a)
//     a -= 5;
// }

// console.log()

// let b = 0;

// while( b <= 35 ){
//     console.log(b)
//     b +=3;
    
// }

// let c = 1;

// while(c <=20 ){
//     if(c%2 == 0){
//         console.log(c * 3)
//     }
//     c++;
// }

// Nando went to the store to get a cookie, the cookie    
// cost 4 dollars and he paid with a 10 dollar bill. Write a loop that 
// shows how many quarters he received in change

// variable for the cookie
//  variable for paid
// for change

// let cookieCost = 4
// let nandoPaid = 10
// let change = nandoPaid - cookieCost; // 6


// while(change  >  0){ // 6 less than 10
//     console.log(change / .25) // 6 / .25 =24
//     change  --
//     // return change
    
// }

// var cost = 4
// var paid = 10
// var changeInCoins = (paid - cost)*4
// var numCoin = 1
// 	while (numCoin<=changeInCoins){
// 	    console.log(numCoin)
// 	    numCoin++
// 	}


// var c = 4; 
// var p = 10; 
// var change = p-c; 
// var finalchange = change/.25
// while (change > 0 ) {
//     if (change == 6) {
//         console.log(finalchange)
//     }
//     change--;
// }

let cookieCost = 4
let nandoPaid = 10
let change = nandoPaid - cookieCost; 

while(change  < nandoPaid){ 
    if (change == 6) {
        console.log(change / .25)  
    }
    change++
}