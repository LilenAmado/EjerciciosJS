'use strict'
// Hacer un programa que muestre todos los números entre dos números introducidos por el usuario.

let num1 = Number(prompt("Introduzca el primer número"));
let num2 = Number(prompt("Introduzca el segundo número"));

while (isNaN(num1) || isNaN(num2)){
    num1 = Number(prompt("Introduzca el primer número"));
    num2 = Number(prompt("Introduzca el segundo número"));
}

document.write("Entre el: " + num1 + " y el: " + num2 + " se encuentran los números: <br><br>");
console.log("Entre el: " + num1 + " y el: " + num2 + " se encuentran los números:");

for (let i = num1; i <= num2 ; i++){
    document.write(i + "<br>");
    console.log(i);
}

for (let i = num1; i >= num2 ; i--){
    document.write(i + "<br>");
    console.log(i);
}