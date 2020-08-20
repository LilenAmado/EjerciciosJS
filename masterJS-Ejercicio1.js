'use strict'
// Hacer un programa que pida dos numeros al usuario y que diga cual es el mayor, el menor o si son iguales. 

let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

if (num1 < num2){
    alert("El segundo numero ingresado es el mayor: " + num2);
}else if (num1 > num2){
    alert("El primer numero ingresado es el mayor: " + num1);  
}else if (num1 == "" || num2 == ""){
    alert("No ingresó un número.");
}else if (num1 == num2){
    alert("Ambos números son iguales: " + num1);
}else {
    alert("No ingresó un valor correcto.");
}

