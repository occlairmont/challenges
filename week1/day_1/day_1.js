// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

let myName = 'Octavia'
let friendsName = 'Samantha'

console.log(myName, myName.length);
console.log(friendsName, friendsName.length);

if (myName.length > friendsName.length){
    let letters = friendsName.length - myName.length
    console.log(`${myName} is longer that ${friendsName} by ${letters} letters!`); 
} else {
    let letters = friendsName.length - myName.length
    console.log(`${friendsName} is longer than ${myName} by ${letters} letters. Boo!`)
}

// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
 */
/* GOLD 
Rewrite this as a ternary
*/

let parasite = {
    genre : 'Thriller',
    year : 2019,
    isAmerican : false,
    awards : {
        bestPicture : 2020,
        bestDirector: 2020,
        bestScreenplay: 2020,
        blueDragonBestFilm: 2019,
    }
}
    console.log(typeof parasite.genre);

let value = parasite.genre

if (typeof value === 'undefined'){
    console.log('This is a string');
} else if (typeof value === 'number'){
    console.log('This is a number')
} else if (typeof value === 'boolean') {
    console.log('This is a boolean');
} else if (typeof value === 'object') {
    console.log('This is a object')
} else {
    console.log('What are you?!')
}
/*if ( === genre){
    console.log('This is a string.')
} else {
    console.log('What are you?!')
}
*/