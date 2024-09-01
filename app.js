const input = document.getElementById("input");

function reverseStr(str){
    return str.split("").reverse().join("");   
}

function clearnStr(str){
    return str.toLowerCase().replace(/[^a-z0-9]/gi, '');
}

function checkWord(){ 
    const word = document.getElementById("palindrome");
    const value = input.value;
    const cleanedValue = clearnStr(value);
    const reverse = reverseStr(cleanedValue);
    
    if (cleanedValue === reverse) {       
     
        word.textContent = "Palindrome";
    }else{
        word.textContent = "Not a Palindrome. Try again.";
    }

    input.value = "";
}

