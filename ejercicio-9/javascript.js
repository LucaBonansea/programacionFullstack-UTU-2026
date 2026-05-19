/*alert("Hola mundo!");*/

/*
var nombre = prompt("Nombre tuyo: ");

alert("Hola, " + nombre + "!");
*/

/*
var num1 = prompt("Introduce el primer número: ");
var num2 = prompt("Introduce el segundo número: ");

var resultado = parseInt(num1) + parseInt(num2);

alert("El resultado de la suma es: " + resultado);
*/

/*
var numero = prompt("Introduce un número: ");

if (numero >= 18) {
    alert("Eres mayor de edad.");
} else {
    alert("Eres menor de edad.");
}
*/

/*
var numero = prompt("Introduce un número: ");

if (numero % 2 === 0) {
    alert("El número es par.");
}else {
    alert("El número es impar.");
}
*/

/*
var num1 = parseInt(prompt("Ingresar un numero: "));
var num2 = parseInt(prompt("Ingresar un numero: "));
var num3 = parseInt(prompt("Ingresar un numero: "));

var max = parseInt(0);

if(num1 > num2 && num1 > num3){
    alert(num1);
}

if(num2 > num1 && num2 > num3){
    alert(num2);
}

if(num3 > num1 && num3 > num2){
    alert(num3);
}
*/
/*
var nota = parseInt(prompt("Ingrese nota: "))
if(nota < 5 && nota >=1 ){
    alert("insuficiente")
}else if (nota > 5 && nota < 8){
    alert("Aceptable")
}else{
    alert("Muy bien")
}
*/

/*
for(var i = 0; i <= 10; i++){
   alert(i);
}

*/
/*
for(var i = 0; i <= 20; i++){
   if(i % 2 == 0){
        alert(i);
   }
}
*/
/*
var input = prompt("Contra:");

if(input == 1234){
    alert("Correcta");
}else{
    alert("Incorrecta");
}

*/
/*
let input = -1;
let sumatotal = 0;


while(input != 0){
    input = parseInt(prompt("Ingrese un numero: "));
    sumatotal += input;
}

alert("Suma total: " + sumatotal);
*/
/*
let opcion = parseFloat(prompt("1: Suma, 2: Resta, 3: Multiplicacion, 4: Division"));
let input = parseFloat(prompt("Ingrese un numero: "));
let input2 = parseFloat(prompt("Ingrese un numero: "));
let resultado = 0;


if(opcion == 1){
    resultado = input + input2;
    alert("El resultado de la suma es: " + resultado);   
}else if(opcion == 2){
    resultado = input - input2;
    alert("El resultado de la resta es: " + resultado);   
}else if(opcion == 3){
    resultado = input * input2;
    alert("El resultado de la multiplicacion es: " + resultado);   
}   else if(opcion == 4){
    resultado = input / input2;
    alert("El resultado de la division es: " + resultado);   
}
*/

/*
let opcion = parseFloat(prompt("1: Saludar, 2: mostrar fecha, 3: Mostrar numero random"));

if(opcion == 1){
    let nombre = prompt("Ingrese su nombre: ");
    alert("Hola " + nombre);
}else if(opcion == 2){
    let fecha = new Date();
    alert("La fecha es: " + fecha);
}else if(opcion == 3){
    let numero = Math.floor(Math.random() * 10) + 1;
    alert("El número aleatorio es: " + numero);
}
*/

/*
let numero = Math.floor(Math.random() * 10) + 1;
let opcion = parseFloat(prompt("Adivina el numero entre 1 y 10: "));

if(opcion == numero){
    alert("¡Correcto! El número era: " + numero);
}else{
    alert("Incorrecto. El número era: " + numero);
}
*/


/*
let contador = 0;
let numero = -1;

while (numero != 0) {
    numero = parseInt(prompt("Ingrese un numero par: (0 para mostrar el resultado)"));

if (numero % 2 === 0 && numero != 0) {
    contador++;
}
}

alert("Cantidad de numeros pares ingresados: " + contador);
*/

/*
let nombres = ["Thiago", "Luca", "Ariana", "Nicolas", "Emanuel"];
console.log("Nombres: " + nombres);
*/


/*
let nombres = ["Thiago", "Luca", "Ariana", "Nicolas", "Emanuel"];
for (let i = 0; i < nombres.length; i++) {
    console.log("Nombre: " + nombres[i]);
}
*/

/*
var numeros = [20,26,31,4,2,9,34,5,9,10];

var max = 0;
var min = numeros[0];
for(var i  = 0; i < numeros.length; i++){
    if(numeros[i] > max){
        max = numeros[i];
    }
    if(numeros[i] < min){
        min = numeros[i];
    }
}
alert("El numero maximo es: " + max);
alert("El numero minimo es: " + min);
*/

/*
var notas= [1,6,3,4,2,4,7,5,9,10];
let promedio = 0;
for(var i  = 0; i < notas.length; i++){
    promedio += notas[i];
}
promedio = promedio / notas.length;
alert("El promedio de las notas es: " + promedio);
*/


/*
let nombres = [];
let nombre = "";

while(nombre != "salir"){

    nombre = prompt("Ingrese un nombre (o 'salir'): ");

    if(nombre != "salir"){
        nombres.push(nombre);
    }

}

console.log("Nombres ingresados: " + nombres);
*/

/*
var notas= [1,6,3,4,2,4,7,5,9,10];
console.log(notas.length);
*/

/*
var notas= [1,6,3,4,2,4,7,5,9,10];
for(var i  = 0; i < notas.length; i++){
    if(notas[i] % 2 == 0){
        console.log("Nota par: " + notas[i]);
    }
}
*/

/*
var frutas = ["Manzana", "Banana", "Naranja", "Pera", "Uva"];
let existe = frutas.includes("Banana");
alert("la fruta existe? " + existe);
*/

/*
var frutas = ["Manzana", "Banana", "Naranja", "Pera", "Uva"];

frutas.pop();
console.log(frutas);
*/

/*
var frutas = ["Manzana", "Banana", "Naranja", "Pera", "Uva"];

frutas.push("Kiwi");
console.log(frutas);

*/