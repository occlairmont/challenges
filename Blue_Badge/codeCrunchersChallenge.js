function createCheckDigit(membershipId) {
    let newArray = membershipId.split('');
    console.log(newArray); 
    let total = 0;
    for(let i = 0; i < newArray.length; i++){
        total = total + Number(newArray[i]);
    }
     return total;
    }
    
    console.log(createCheckDigit("55555"));
    console.log(createCheckDigit("4812863"));