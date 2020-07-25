// FIZZBUZZ FOR LOOP
// Create a for loop that counts from 0 to 100
// Within the for loop write a conditional that checks each number and: 
// Prints out "Fizz" if the number is divisible by 3
// Prints out "Buzz" if the number is divisible by 5
// Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
// Prints out the number if it is not divisible by 3 or 5
// OPTIONAL: Wrap this all in a function and invoke it
// Convert the conditional to a ternary
// Convert the conditional to a switch


for (i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('Fizz Buzz');
    } else if (i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

for (i = 0; i <= 100; i++){
    i % 3 === 0 && i % 5 === 0 ? console.log('Fizz Buzz') : i % 3 === 0 ? console.log('Fizz') : i % 5 === 0 ? console.log('Buzz') : console.log(i);
}

for (i = 0; i <= 100; i++){
    switch(true){
        case i % 3 === 0 && i % 5 === 0 :
            console.log('Fizz Buzz');
        break;
        case i % 3 === 0:
            console.log('Fizz');
        break;
        case i % 5 === 0:
            console.log('Buzz');
        break;
        default:
            console.log(i);
    }
}

function fizzBuzz(){
    for (i = 0; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('Fizz Buzz');
        } else if (i % 3 === 0){
            console.log('Fizz');
        } else if (i % 5 === 0){
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
console.log(fizzBuzz());

// PIES CHALLENGE
// For Bronze, find all of the fruit pies and using string interpolation print a sentence including the name of the pie.
// For Silver, use a different loop and conditional to accomplish the same behaviour.
// For Gold, push all of the pies into a new array and have the new fruitPies array print once. 
// For Platinum, create an array of fruits. Use this array of fruit to compare against the pies array and push the pies that contain any of those fruits in the fruitPies array.
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'sugar', 'lemon meringue', 'chicken pot', 'shepherd', 'key lime'];

for (p of pies){
    if (p.includes('apple') || p.includes('bluberry') || p.includes('peach') || p.includes('cherry') || p.includes('lemon') || p.includes('lime')){
        console.log(`${p} pie is a type of fruit pie.`);
    } else {
        console.log(`${p} is not a type of fruit pie.`);
    }
}

//another way -> more for checking indiviual values
for (p of pies) {
    if (p.includes('apple')){
        console.log(`${p} pie is a type of fruit pie.`);
    } else {
        console.log(`${p} is not a type of fruit pie.`);
    }
}

//FOR LOOP
for (let i = 0; i < pies.length; 1++){
    if (i == 0 || i == 1 || i == 2 || i == 4 || i == 6 || i == 9){
        console.log(`${pies[i]} is a type of fruit pie!`);
    } else {
        console.log(`${pies[i]} is not a type of fruit pie.`);
    }
}

//FOR IN LOOP
for (pie in pies){
    console.log(pie);
    if(pie == 0 || pie == 1 || pie == 2 || pie == 4 || pie == 6 || pie == 9){
        console.log(`${pies[pie]} is a type of fruit pie!`);
    } else {
        console.log(`${pie[pie]} is not a type of fruit pie!`);
    }
}
