console.log(num); //<-reads this first. js says num = undefined
sayHi(); //<- logs this* and uses the num that was already recognized as undefined

var num = 12; //<-reads last as the num being redefined to 12, instead of first
    console.log(num);

function sayHi(){ //*
    console.log('Hi!');
    console.log(num);
}


/*scoping*/

let myVar = 1;

function b(){
    console.log('function b', myVar);
}

