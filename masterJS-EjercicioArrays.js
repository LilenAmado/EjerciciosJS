// 1) Pida 6 números por pantalla y los meta en un array
let num1 = Number(prompt("Primer número"));
let num2 = Number(prompt("Segundo número"));
let num3 = Number(prompt("Tercero número"));
let num4 = Number(prompt("Cuarto número"));
let num5 = Number(prompt("Quinto número"));
let num6 = Number(prompt("Sexto número"));

let numeros = [num1, num2, num3, num4, num5, num6];

// 2) Tiene que mostrar el array entero, todos sus elementos, en el cuerpo de la página y en la consola

for(let i = 0; i < 6; i++){
    document.write("El el indice n°"+ i + " del array esta guardado el número: " + numeros[i] + "<br>");
    console.log(numeros[i])
}
document.write("<hr>");

// 3) Ordenar el array y mostrarlo

numeros.sort();
document.write("Ordenados de menor a mayor: <br>");
document.write(numeros);
console.log("Ordenados:");
console.log(numeros);
document.write("<hr>");

// 4) Invertir su orden y mostrarlo

numeros.reverse();
document.write("Ahora invertidos de mayor a menor: <br>");
document.write(numeros);
console.log("Ahora invertidos:");
console.log(numeros);
document.write("<hr>");

// 5) Mostrar cuantos elementos tiene el array

document.write("El array tiene " + numeros.length + " elementos");
console.log("El array tiene " + numeros.length + " elementos");
document.write("<hr>");

// 6) Busqueda de un valor introducido por el usuario y que nos diga si se encuentra en el array y que nos diga su indice

let busquedaUsuario = Number(prompt("Que número quiere buscar: "));

let busqueda = numeros.find(elemento => elemento == busquedaUsuario);

let busquedaIndice = numeros.findIndex(elemento => elemento == busquedaUsuario);

document.write("El número que busca es el: "+ busqueda + " y se encontró en el índice: " + busquedaIndice);

console.log("El número que busca es el: "+ busqueda + " y se encontró en el índice: " + busquedaIndice);