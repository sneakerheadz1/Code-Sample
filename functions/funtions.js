//  Functions => reusable blocks of code

//  ES5 way of functions
// explicit create function & name the function (ex. below)
// create parameters and the go in parenthesis 
//  use the function. you must make a function call = invoke function
// fill parameters with arguments

// function addition(x,y){
//     var z = x+y
//     console.log(z)
// }
// addition(5,7)

// function conditional(x,y,z){
//     let sum = x + y + z
//     console.log(sum)
// }

// conditional(7,13,22)


//  ES6 Arrow function

// var subtraction = (x,y) =>{
//     var z = x-y
//     console.log(z)
// }
// subtraction(10,7)

// let cookieCost = 4
// let nandoPaid = 10
// let change = nandoPaid - cookieCost; 

// My Code Function
// var quarters = (c,p,ch) => { // create parameter for(c=cookie, p=paid,ch=change) 
//     while(ch  < p){               // while change less than whats paid
//      if (c == c) {                   //change = change
//         console.log(ch / .25)   // print the change in quarters
//         }
//         ch  ++                           // increase change by 1 to stop loop
//     }
// }

// quarters(2,20,18)

// var change = (c,p) => {
//     var change = (p-c) / .25
//     console.log(change)
// }

// change(2,20)

//------------------------Dom's cash register-------------------------------------------------------------//

// function billRec(paid, cost){                     //create function and add parameters
//     change = paid - cost                             // change subtract what paid from what cost == 100 - 27.83
//     // console.log(change)
//     while (change !== 0)
//     if(change => 50){                               // if change is = to 10 print change / 10 
//         console.log(50)
//     }
//     else if (change > 40) {                              // else if change > 10 
//         console.log(change / 20 )
//     }
//      else if (change >= 20 ) {                              // else if change > 20
//         console.log(change / 50 )
//     }
//     else if (change >= 10 ) {                              // else if change > 20
//         console.log(change / 50 )
//     }
//     else if (change >= 5 ) {                              // else if change > 20
//         console.log(change / 50 )
//     }
   
// }
// billRec(100,27.83)

function billRec(paid, cost){                     //create function and add parameters
    change = paid - cost    
                                                                 
    while (change !== 0)   {

        if (change >= 50){
            change = change - 50
            console.log(" 50 dollar")
        }
        if (change >= 20){
            change = change - 20
            console.log("20 dollars")
        }
         if (change >= 10){
            change = change - 10
            console.log("10 dollars")
        }
        if (change >= 5){
            change = change - 5
            console.log("5 dollars")
        }
         if (change >= 1){
            change = change - 1
            console.log("1 dollars")
        }
        else if(change < 1) {
            console.log('Change less than dollar')
        };
    }             
}          
billRec(100,27.18)




//------------------------Dom's cash register-------------------------------------------------------------//

/*------------------------taj code cash register-------------------------------------------------------------*/

// var register=(paid,cost)=>{
//     totalchange = paid-cost
//     change = paid-cost
//     fitties = 0
//     dubz = 0
//     tens = 0
//     fives = 0
//     singles = 0
//     qrtrs = 0
//     dimes = 0
//     nicks = 0
//     pennies = 0
//     while(change>=50){
//         change-=50
//         fitties+=1
//     }
//     while(change>=20){
//         change-=20
//         dubz+=1
//     }
//     while(change>=10){
//         change-=10
//         tenz+=1
//     }
//     while(change>=5){
//         change-=5
//         fives+=1
//     }
//     while(change>=1){
//         change-=1
//         singles+=1
//     }
//     while(change>=.25){
//         change-=.25
//         qrtrs+=1
//     }
//     while(change>=.10){
//         change-=.1
//         dimes+=1
//     }
//     while(change>=.05){
//         change-=.05
//         nicks+=1
//     }
//     while(change>=.01){
//         change-=.01
//         pennies+=1
//     }
//     console.log('Your Change is '+(totalchange)+' in '+(fitties)+' 50s '+(dubz)+' 20s '+
//     (tens)+' 10s '+(fives)+' 5s, and '+(singles)+' singles. '+(qrtrs)+' quarters '+(dimes)+' dimes '+
//     (nicks)+' nickles, and '+(pennies)+' pennies. '  )
// }
// register(100,48.23)
/*------------------------------------------------------------------------------------*/

/*-----------------------------Tavaris cash register code--------------------------------------------------*/
// create a variable to keep track of what was paid out


// const bigChange = (paid, total) => {
//     var changeOwed = paid - total;
//     var penny = 0;
//     var nickel = 0;
//     var dime = 0;
//     var quarter = 0;
//     var dollar = 0;
//     var fiveDollar = 0;
//     var tenDollar = 0;
//     var twentyDollar = 0;
//     var fiftyDollar = 0;
//     while(changeOwed > 0.01) {
//         if (changeOwed >= 50) {
//             changeOwed -= 50;
//             fiftyDollar++
//         } else if (changeOwed >= 20 && changeOwed < 50) {
//             changeOwed -= 20;
//             twentyDollar++
//         } else if (changeOwed >= 10 && changeOwed < 20) {
//             changeOwed -= 10;
//             tenDollar++
//         } else if (changeOwed >= 5 && changeOwed < 10) {
//             changeOwed -= 5;
//             fiveDollar++
//         } else if (changeOwed >= 1 && changeOwed < 5) {
//             changeOwed -= 1;
//             dollar++;
//         } else if (changeOwed >= .25  && changeOwed < 1) {
//             changeOwed -= .25;
//             quarter++
//             // console.log(changeOwed);
//         } else if (changeOwed >= .10 && changeOwed < .25) {
//             changeOwed -= .10;
//             dime++
//         } else if (changeOwed >= .05 && changeOwed < .10) {
//             changeOwed -= .05;
//             nickel++
//         } else if (changeOwed >= .01 && changeOwed < .05) {
//             changeOwed -= .01;
//             penny++
//         }
//     }
//     console.log(
//         `
// Pennies: ${penny}
// Nickels: ${nickel}
// Dime: ${dime}
// Quarter: ${quarter}
// Dollar: ${dollar}
// Five Dollar: ${fiveDollar}
// Ten Dollar: ${tenDollar}
// Twenty Dollar: ${twentyDollar}
// Fifty Dollar: ${fiftyDollar}
//         `
//         )
// }
bigChange(1000,50)
/*-----------------------------Tavaris cash register code--------------------------------------------------*/

/*------------------------Levar Pitts code cash register-------------------------------------------------------------*/
// function register(amountPaid,itemCost){
//     var change = amountPaid-itemCost
//     while (change >=50){
//         change-=50
//         console.log(“give 50 dollar bill”)
//     }
//     while (change>=20){
//         change-=20
//         console.log(“give 20 dollar bill”)
//     }
//     while (change>=10){
//         change-=10
//         console.log(“give 10 dollar bill”)
//     }
//     while (change>=5){
//         change-=5
//         console.log(“give 5 dollar bill”)
//     }
//     while (change>=1){
//         change-=1
//         console.log(“give 1 dollar bill”)
//     }
//     while (change>=.25){
//         change-=.25
//         console.log(“give quarter”)
//     }
//     while (change>=.10){
//         change-=.10
//         console.log(“give dime”)
//     }
//     while (change>=.05){
//         change-=.05
//         console.log(“give nickel”)
//     }
//     while (change>=.01){
//         change-=.01
//         console.log(“give penny”)
//     }
// }
/*------------------------Levar Pitts code cash register-------------------------------------------------------------*/


/*------------------------Murray-------------------------------------------------------------*/
// var change=(paid,cost)=>{
//     change = paid-cost;
//     while (change !==0){
//         if (change >=50){
//             console.log(50)
//         }
//         if (change >=20){
//             console.log(20)
//         }
//         if (change >=10){
//             console.log(10)
//         }
//         if (change >=5){
//             console.log(5)
//         }
//         else {console.log(change*1)
//         }
//     }
//     while (change <1){
//         if (change %.25 ==0){
//             console.log(change*.25)
//         }
//         if (change %.10 ==0){
//             console.log(change*.10)
//         }
//         if (change %.05 ==0){
//             console.log(change*.05)
//         }
//         else {console.log(change*.01)}
// }
// }
// change(100,27.83)

/*-------------------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------*/
// jon code example below >>> function
// var coinDesp=(paid, cost)=>{
//     var changeInCoin=(paid-cost)*4
//     numCoin= 1
//     while (numCoin<=changeInCoin){
//         console.log(numCoin)
//         numCoin++
//     }
// }
// coinDesp(4,2)

// tavaris function code >>







/*--------------------------------------------------------------------------------------*/



