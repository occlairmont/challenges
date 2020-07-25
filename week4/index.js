// console.log('Connected')
let url = ('https://adventure-time-quote-api.glitch.me/api/random')

const section = document.getElementById('quote')

const charPics = {
finn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
'tart toter' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
lady : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
'lumpy space princess' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
'duke of nuts' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
'princess bubblegum' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
iceKing : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
bmo : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
'jake the dog' : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015"
}

fetch(url)
    .then (function(result){
        return result.json()
    })
    .then(function(data){
        console.log(data);
        displayResults(data)
    })
    .catch(err => console.error({error: err}))

function displayResults(json){
    let quote = json;
    console.log(`QUOTE RESULT ==> ${quote}`);

    let heading = document.createElement('h2');
    let image = document.createElement('img');

 //PARENT.appendChild(CHILDELEMENT)
    section.appendChild(image);
    section.appendChild(heading);
    
    heading.textContent = quote.split(":")[1];

    let character = quote.split(":")[0].toLowerCase();
    
document.getElementsByTagName
    for(pic in charPics) {
        console.log('character', character); //character is the character from the quote from the API;
        console.log('pic', pic); //represents each character in our charPic object;
        if(character === pic){
            image.src = charPics[pic]
        }
    }
}