'use strict'

// Utilizando un bucle, mostrar la suma y el promedio de los números introducidos hasta introducir un numero negativo y ahí mostrar el resultado

let contador = 0;
let suma = 0;
let numero;

do {
    numero = Number(prompt("Ingrese un numero que quiera sumar y cuando quiera cortar el loop escriba un número negativo"));
    if(isNaN(numero)){
        numero=0
    }else if(numero>=0){
        suma += numero;
        contador++;
    }
    console.log("Usted ingresó: " + numero);
    console.log("La suma hasta ahora es: " + suma + " y el indice: "+contador);
}while(numero>=0)

console.log(`La suma total es de: ${suma} y el promedio es: ${suma / contador}`);
