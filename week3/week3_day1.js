// WHITEBOARDING PRACTICE CHALLENGES
// COUNTING SUM CHALLENGE
// Write a function that adds together all the numbers between any two numbers.
// Your function will accept two parameters. One for the starting number and another for the ending number.
// console.log the final sum of the numbers.

// let x = ;
// let y = ;

function countingSum(startNum, endNum){
    return startNum + 
}

countingSum(1, 100);

// Solution
function countingSum(start, stop) {
    let sum = start;
    for (i = start + 1; i <= stop; i++) {
      sum += i
      // console.log(sum)
    }
    console.log(sum)
  }
  countingSum(1, 100) // = 5050
  countingSum(35, 77) // = 2408
  countingSum(234, 567) // = 133767

// The object should contain the following properties:
/*
Animal - string
Name - string
Gender - string
Age - integer
Likes - array
*/

let pet = {
    animal: 'moose',
    name: 'Sam',
    gender: 'Male',
    age: 36,
    likes: ['books', 'working out', 'hunting'] 
}

// Area of a Trapezoid
// Write a function that accepts the parameters b1, b2, h 
// Your function should console.log the area of a Trapezoid
// 1/2(b1 + b2)h


function area(b1, b2, h){
  console.log(.5*(b1 + b2)*h)
}

area(5,6,10);