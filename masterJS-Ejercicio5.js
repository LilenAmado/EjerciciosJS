//Mostrar todos los números divisores de un número introducido por prompt

let numeroUsuario = Number(prompt("Introduzca el número"));

while(isNaN(numeroUsuario)){
    numeroUsuario = Number(prompt("Introduzca el número"));
}

for (let i = 0; i <= numeroUsuario; i++) {
    if(numeroUsuario%i == 0){
        document.write(i + "<br>");
        console.log(i);
    }
}