// Mostrar la tabla de multiplicar del número introducido por pantalla

let numeroUsuario = Number(prompt("Introducir número")); 

while (isNaN(numeroUsuario)){
    numeroUsuario = Number(prompt("Introducir número")); 
}

for (let i = 0; i <= 10; i++){
    let tablas = numeroUsuario * i;
    document.write(`${numeroUsuario} x ${i} = ${tablas} <br>`);
    console.log(`${numeroUsuario} x ${i} = ${tablas}`);
}