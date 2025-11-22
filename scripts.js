
//***Numeros***//

let x = 5
let y = 7

//1//

function addition (x, y){
    return x+y;
}
let sumA = addition (x, y);
console.log(sumA);

//2//

function subtraction (x, y){
    return x-y;
}
let sumS = subtraction (x, y);
console.log(sumS);

//3//

function multiplication (x, y){
    return x*y;
}
let sumM = multiplication (x, y);
console.log(sumM);

//4//

function division (x, y){
    return x/y;
}
let sumD = division (x, y);
console.log(sumD);

//5//

//6//

//7//

//8//

//9//

//10//


//***Letras***//

//1//

let text1 = "Bonjour, "
let text2 = "je m'appelle Manon."

function concenation(text1, text2){
    return text1+text2;
}

let phrase1 = concenation(text1, text2)
console.log(phrase1);

//2//

function howLongText (phrase1){
    return phrase1.length;
}

let length = howLongText (phrase1)
console.log(length);

//3//

let text3 = "femcoders f5 2025"

function majuscules (text3){
    return text3.toUpperCase();
}

let capital = majuscules (text3)
console.log(capital);

//4//

let text4 = "JAVASCRIPT IS FUN"

function minuscules (text4){
    return text4.toLowerCase();
}

let lowercase = minuscules (text4);
console.log(lowercase);

//5//

//6//

//7//

//8//

//9//

//10//


//***Arrays***//

//1//

let numeros = [5,8,6,9,14,36];

function calculateSum (accumulator, currentValue){
    return accumulator + currentValue;
};

let total = numeros.reduce(calculateSum);
console.log(total);

//2//

//3//

//4//

//5//

//6//

//7//

//8//

//9//

//10//

//***Objetos literales***//

//1//

//2//

//3//

//4//

//5//

//6//

//7//

//8//

//9//

//10//