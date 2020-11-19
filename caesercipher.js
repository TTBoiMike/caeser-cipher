// global variables
let alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];
let letterRegEx = /[^a-z]/;

// create function that takes the input message and returns a ciphered message
function cipherMessage() {
    // let outputArea = document.getElementById("output");
    let cipherNumber = Number(document.getElementById("number").value);
    // console.log(typeof(cipherNumber));
    let userMessage = makeIndex(document.getElementById("input").value);
    // console.log(userMessage);
    document.getElementById("output").value = convertIndex(userMessage, cipherNumber);
}

// function that returns an array on numbers based on position of letters in alphabet
// sample innput ("abc");
function makeIndex(inputString) {
    let stringIndex = [];
    for(let i = 0; i < inputString.length; i++) {
        if(letterRegEx.test(inputString[i])) {
            stringIndex.push(inputString[i]);
        } else {
            stringIndex.push(Number(alphabet.indexOf(inputString[i])));
        }
    }
    // console.log(stringIndex);
    return stringIndex;
}

// function that returns a string from an input array of index numbers
// variables - indexArray = array of numbers from findIndex() / number = number from cipher message vairable (e.g 1 = A -> B, 2 => A => C);
// sample input - ([0,1,2], 1)
function convertIndex(indexArray, number) {
    let newString = [];
    for(let i = 0; i < indexArray.length; i++) {
        if(isNaN(indexArray[i]) || (typeof(indexArray[i]) === "string")) { //  || numberRegEx.test(toString(indexArray[i]))
            newString.push(indexArray[i]);
        } else {
            newString.push(alphabet[indexArray[i] + number]);
        }       
    }
    // console.log(newString);
    return newString.join("");
}    
