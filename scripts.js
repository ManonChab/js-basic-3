
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

function exp (x, y) {
    return Math.pow(x, y);
}
let exp1 = exp(x,y);
console.log(exp1);

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

function letterPosition (text, position) {
    return text[position];
}

let text5 = "JAVASCRIPT IS THE BEST"

console.log(letterPosition(text5, 6));

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

function calculateAverage(array) {
    let sumB =0;
    for (let i =0; i < array.length; i++) {
        sumB += array[i];
    }
    return sumB / array.length;
}
let average = calculateAverage(numeros);
console.log(average);

//3//

function ascendingArray(array) {
    return array.sort((a, b) => a-b);
}

let exercice3 = ascendingArray(numeros);
console.log(exercice3);

//4//
const filter = numeros.filter(giveMeMoreThan);

function giveMeMoreThan (number) {
    return number >=10;
}
console.log(filter);

//5//

const moreNumeros = [ 76, 56, 26, 37, 2, 89];
const arrayTotal = numeros.concat(moreNumeros);

function mergeTheArrays(){
    return arrayTotal
}

console.log(arrayTotal);

/* P.S:

al principio, he probado lo siguiente :

function mergeTheArrays(){
    const arrayTotal = numeros.concat(moreNumeros);
    return arrayTotal
}
console.log(arrayTotal);

pero sale que "arrayTotal" no es definido... no entiendo porque...
cuando salgo el const de la function, ahora si funciona.
pero siento que no respondo muy bien al ejercicio porque la funcion no hace mucho... 
el const afuera de la funcion esta llevando el trabajo, y asi no es "reproductible"

*/

//6//

//7//

//8//

//9//

//10//


//***Objetos literales***//

const myList = {
    name:"Leo",
    surname:"Godfroy-Burnos",
    age: "18 months",
    weight: "10,5 kg",
    height:"80cm"
    }

//1//
function whatIsYourName (object) {
    let myName = object.name;
    return myName;
}
console.log(whatIsYourName(myList));

//2//
function changeAge (object) {
    let newAge = object.age = otherNumber
    return newAge
} 
let otherNumber = "2 years"
changeAge(myList);
console.log(myList);

//3//
function addAProperty (object, newProperty) {
    let property = object.eyecolor = something;
    return property
}

let newProperty = "eye color";
let something = null;
addAProperty(myList, newProperty)
console.log(myList);

//4//
function deleteProperty (object, property) {
    return updatedObject = delete(object.height)
}
deleteProperty(myList);
console.log(myList);

//5//

function howManyProperty(list) {
    let howMany = Object.keys(list);
    return howMany.length;
}
console.log(howManyProperty(myList));

//6//

//7//

//8//

//9//

//10//