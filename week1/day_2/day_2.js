/*
Challenge:
Bronze:
Create a variable named FB that takes numbers
Write a conditional that: 
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
Silver:
Write this as a Ternary
Gold: 
Write this as a Switch Statement
*/

let fb = 30;

if (fb % 3 === 0 && fb % 5 === 0){
    console.log('Fizz Buzz');
} else if (fb % 5 === 0){
    console.log('Buzz');
} else if (fb % 3 === 0) {
    console.log('Fizz');
}

fb % 3 === 0 && fb % 5 === 0 ? console.log('Fizz Buzz') : fb % 5 === 0 ? console.log('Buzz') : fb % 3 === 0 ? console.log('Fizz') : console.log('It does not work for either.');



switch (true){
    case fb % 3 === 0 && fb % 5 === 0:
        console.log('Fizz Buzz');
    break;
    case fb % 5 === 0:
        console.log('Buzz');
    break;
    case fb % 3 === 0:
        console.log('Fizz');
    break;
    default:
        console.log("Neither");
}
