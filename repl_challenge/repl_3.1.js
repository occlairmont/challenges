// Using the index.html and index.js files provided, write a webpage that asks the user for input on a store, a quantity, and a product.

// Save the user input in three (3) separate variables.

// Once the user has input their information, your webpage should console.log a sentence using those three (3) variables.

// Then, using DOM manipulation, you should also display the user input to the screen.

// For example: 'I shopped at Target for 5 apples' may be output to the console & screen. This does not need to be styled in any sort of fashion, but feel free to if you would like!

let store = document.getElementById('storeName');
let number = document.getElementById('itemQuantity');
let product = document.getElementById('product');
let submit = document.getElementById('submit');
let para = document.getElementsByTagName('p');

submit.addEventListener('click', event => {
    console.log(`I shopped at ${store.value} for ${number.value} ${product.value}.`);
    para[1].innerText = `I shopped at ${store.value} for ${number.value} ${product.value}.`;
})
