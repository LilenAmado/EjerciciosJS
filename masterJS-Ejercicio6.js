/* Que nos diga si un numero es par o impar.
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el número */

let numeroUsuario = Number(prompt("Introducir número"));

while(isNaN(numeroUsuario)){
    numeroUsuario = Number(prompt("Introducir número"));
}

if (numeroUsuario%2 == 0){
    alert(`El número ${numeroUsuario} es par`);
    console.log(`El número ${numeroUsuario} es par`);
}else{
    alert(`El número ${numeroUsuario} es impar`);
    console.log(`El número ${numeroUsuario} es impar`);
}