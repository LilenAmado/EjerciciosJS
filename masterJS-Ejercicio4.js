'use strict'
// Mostrar todos los números impares que hay entre dos números introducidos por el usuario

let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));


while (isNaN(num1) || isNaN(num2)){
    num1 = Number(prompt("Ingrese el primer número"));
    num2 = Number(prompt("Ingrese el segundo número"));
}

for (let i = num1; i <= num2 ; i++){
    if(i%2 != 0){
        document.write(i + "<br>");
        console.log(i);
    }
}

for (let i = num1; i >= num2 ; i--){
    if(i%2 != 0){
        document.write(i + "<br>");
        console.log(i);
    }
}
