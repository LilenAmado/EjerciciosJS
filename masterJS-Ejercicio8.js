/* Calculadora:
    1. Pida dos números por pantalla
    2. Si metemos uno mal, que nos vuelva a pedir
    3. En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
*/ 

let num1 = Number(prompt("Introduzca el primer número"));
let num2 = Number(prompt("Introduzca el primer número"));

while (isNaN(num1) || isNaN(num2)){
    num1 = Number(prompt("Introduzca el primer número"));
    num2 = Number(prompt("Introduzca el primer número"));
}

if (true){
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicar = num1 * num2;
    let dividir = 0 ;
    if (num2==0){
        dividir = "No se puede dividir entre cero"; 
    }else{
        dividir = num1 / num2;
    }

    let resultado = ` ${num1} + ${num2} = ${suma} \n ${num1} - ${num2} = ${resta} \n ${num1} x ${num2} = ${multiplicar} \n ${num1} / ${num2} = ${dividir}`;

    document.write(`${num1} + ${num2} = ${suma} <br> ${num1} - ${num2} = ${resta} <br> ${num1} x ${num2} = ${multiplicar} <br> ${num1} / ${num2} = ${dividir}`);
    alert(resultado);
    console.log(resultado);
}