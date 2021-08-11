

// Variables
let alienArrayShips = [];
let action = null;




// Create class for user ships    //  * **hull** - `20` * **firepower** - `5` * **accuracy** - `.7` **
class userShip  {
    constructor (hull, firepower, accuracy) {
        this.hull = hull ;
        this.firepower = firepower ;     // firepower** is the amount of damage done to the **hull** of the target with a successful hit. 
        this.accuracy = accuracy
    }
    attackAlien (){
        attacks()
    }
}

let Defender = new userShip(20, 5, .7)
console.log(Defender)

// function to get random integer  whole numbers >>> credit github
let  RandInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(RandInt(3,6))

// function to get random integer  whole numbers >>> credit github
let  randFloat = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}
// console.log(randFloat(.6, .8))


// Alien Class arrays       / randomly: * hull - between `3` and `6` * firepower - between `2` and `4` * accuracy - between `.6` and `.8` 

const alienShip = [
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
    new userShip(RandInt(3,6), RandInt(2,4), randFloat(.6, .8)),
]
// console.log(alienShip[0])

// for loop to push objects into empty array
for(let i = 0; i < alienShip.length; i++){
    alienArrayShips.push(alienShip[i])
    // console.log(alienShip[i])
}
// console.log(alienArrayShips)
// console.log(alienArrayShips[0].hull)
//---------Test Environment--For each------------------//

// alienArrayShips.forEach((element, index, array) => {
//     console.log(element.userShip); 
//     console.log(index); 
//     console.log(array); 
// });

// for(let item in alienArrayShips){
//     console.log(`${ alienArrayShips[item].hull} ${ alienArrayShips[item].firepower}`);
//  }














//---------Test Environment --------------------//

const attacks = () =>{    //(Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } 
    for(let item in alienArrayShips){
        console.log(alienArrayShips[item])
        if(Math.random() <= Defender.accuracy)
        {
         alienArrayShips[item].hull -= Defender.firepower;
         if ( alienArrayShips[item].hull <= 0)
         {
             alienArrayShips.shift()
             let action = prompt(" The current alien ship has [" + alienArrayShips[item].hull +" ]  remaining in the hull. " , "attack/retreat");
             if(action !== "retreat") 
             {
                 action = prompt(`You defeated an alien ship,  ${alienArrayShips.length} ships remaining.  `, "attack/retreat");
                 if (prompt == "attack")
                 {
                     return "retreat";
                 }
                 else if (Math.random() <= alienArrayShips[item].accuracy){
                     Defender.hull -= alienArrayShips[item].firepower;
                     prompt(`You've been hit , ${Defender.hull}  remaining in Defender hull.  `,  " attack/retreat")
                 }
                 else {
                    if(alienArrayShips.length == 0 || Defender.hull == 0){
                        alert("Game over! ")
                    }
                 }
             }       
         }
        }
    }
}
console.log(attacks())






//---------Test Environment-^^^^^^^^-------------------//

// Attack >>>> create an attack for user and attack for alien
// const attacks = () =>{    //(Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } 
//     if(Math.random() <= Defender.accuracy) {
//         alienArrayShips[0].hull =- Defender.firepower;
//         prompt("you have defeated 1st ship", "attack/retreat")
//         if(prompt == "retreat"){
//             attackRounds()
//         }
//     } else{
//         prompt("you missed", attack2())
//     }

// }
// const attack2 = () => {
//     if(Math.random() <= alienArrayShips[0].accuracy) {
//         Defender.hull =- alienShip.firepower;
//         alert("You have hit the Defender", "attack/retreat")
//     }else{
//         prompt("you missed", attacks())
//     }
// }


// for(ships in alienArrayShips){
//     // console.log(ships)
//   }


// console.log(attacks())

// const attackRounds = () =>{
//     attacks()
//     create conditionals for both attacks to iterate through array of ships. 
// }


// Prompt that takes user input    // Initiate start of game function
let startGame = () => {
    let startPrompt = prompt("Are you ready to start Battle Ships? ", "yes/no");
    if (startPrompt == "no" ) {
        alert("Please come back to play later")
      }else{
          let startGame= prompt("Take the first strike?", "yes/no")
          if(startGame == "yes"){
            Defender.attackAlien()
          }else{
              alert("Game Over please come back later")
          }
      }
}

// startGame ()
  




