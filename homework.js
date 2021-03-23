// Take in an array as a parameter
// Include an if/else conditional statement  
// Returns a string oft he users fortune 

// Challenge:
// Use the users input as a parameter 
let alertName = alert("What is your name, stranger?"),
    promptName = prompt("Enter name here:");
let name = promptName;
let alertWish1 = alert("What is one wish you have?"),
    promptWish1 = prompt("I want...");
let alertWish2 = alert("What is your second wish?"),
    promptWish2 = prompt("I want...");
let alertWish3 = alert("What is your last wish"),
    promptWish3 = prompt("I want...");


function wishes() {
    if (wishNum === 0) {
        console.log(wishArray[0]);
    } else if (wishNum === 1) {
        console.log(wishArray[1]);
    } else {
        console.log(wishArray[2]);
    }

    let wish1 = promptWish1;
    let wish2 = promptWish2;
    let wish3 = promptWish3;



    let wishArray = [wish1, wish2, wish3];
    let wishNum = Math.floor(Math.random() * wishArray.length);
}


