const division = 5/2;
const resultado = 10%2;
console.log(resultado);
console.log(division);

const test = 5 + (5-10)*3;
console.log(test);
const nombre = 'Jesus';
const apellido = 'Escutia';
console.log ('mi nombre es' + nombre + apellido);
console.log(`mi nombre es ${nombre} ${apellido}`);

console.log (5>4);
console.log ('7'== 7);
console.log('6' === 6);

let numero = 1;
numero = numero + 1;
++numero; //Operador de incremento, suma 1
console.log(numero);

numero = numero * 5 // numero *=5

// 1. Pedir al usuario por prompt un numero entre 1 y 100
//    - Verificar si es un par o impar e imprimir en resultado en consola

// let num100;
// num100 = window.prompt("Ingrese un numero del 1 al 100");
// if(num100 % 2 == 0) {
//     console.log('Es par');
// } else {
//     console.log('Es impar');
// }


// 2. Pedir al usuario 2 numeros
//    - Imprimir en consola cual es el menor de los 2
//    - Imprimir en consola cual es el mayor de los 2

// let num1, num2;
// num1 = window.prompt("Ingrese el primer numero");
// num2 = window.prompt('Ingrese el segundo numero');
// if(num1>num2){
//     console.log('El primer numero es mayor');
// } else if(num2>num1){
//     console.log('El segundo numero es mayor');
// } else {
//     console.log("Los numeros son iguales")
// }
   
// 3. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
//    - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola
// let name1, peso, luna;

// name1 =window.prompt('Por favor, escriba su nombre');
// peso = window.prompt('Escriba su peso en kg');
// luna = (peso/9.81)*1.622;
// console.log('Su peso en la luna seria de ',luna, ' kg');


// 4. Pedir al usuario la calificación de un examen ( 0 a 100) por el prompt:
//    -Imprimir en consola las equivalencias en letra su calificación, es decir:
   
// si es mayor o igual a 90, imprimir "A"

// si es mayor o igual a 80 y menor que 90 , imprimir "B"
   
// si es mayor o igual a 70 y menor que 80 , imprimir "C"
   
// si es mayor o igual a 60 y menor que 70 , imprimir "D"
   
// si es mayor o igual a 50 y menor que 60 , imprimir "E"
   
// si es menor 50 , imprimir "F"

// let calificacion;
// calificacion = window.prompt('Escriba su calificacion');

// if (calificacion>=90){
//     console.log("A");
// } else if (calificacion >=80 && calificacion<90) {
//     console.log("B");
// } else if (calificacion >=70 && calificacion<80) {
//     console.log("C");
// } else if (calificacion >=60 && calificacion<70) {
//     console.log("D");
// } else if (calificacion >=50 && calificacion<60) {
//     console.log("E");
// } else {
//     console.log("F");
// }

// ---------Tarea----------
// Casa de cambio

// Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), 
//tambien debe  pedirle el nombre de un pais , investigar su moneda y 
//el tipo de cambio para hacer la conversion de  la cantidad capturada. ejemplo

// 1-¿Que cantidad en MXN deseas convertir ?
// R= 1500 MXN
// 2¿A que pais vas a viajar?
// R= USA

// salida de la funcion: '$1500MXN (moneda local elegida por el koder) equivale a
// $750USD(moneda del pais ingresado por el usuario)'

// Considerar minimo 4 tipo de monedas

let original, otraMoneda, dinero;
original = window.prompt("Bienvenido! Escriba el numero de la moneda que quiere cambiar: 1.MXN 2.USD 3.JPY 4.EUR");
dinero = window.prompt("Digite la cantidad que desea convertir");
function forex(){
    if(original == 1){
        otraMoneda = window.prompt("Excelente! Ahora seleccione la moneda a cambiar: 1.USD 2.JPY 3.EUR");
        switch (otraMoneda){
            case '1': console.log("Usted recibirá ", (dinero*0.049)," USD");
            break;
            case '2': console.log("Usted recibirá ", (dinero*5.43)," JPY");
            break;
            case '3': console.log("Usted recibirá ", (dinero*0.042)," EUR");
            break;
            default: console.log("Error, digite un numero de los presentados");
            break;
        }
    } else if(original == 2){
        otraMoneda = window.prompt("Excelente! Ahora seleccione la moneda a cambiar: 1.MXN 2.JPY 3.EUR");
        switch (otraMoneda){
            case '1': console.log("Usted recibirá ", (dinero*20.44)," MXN");
            break;
            case '2': console.log("Usted recibirá ", (dinero*110.1)," JPY");
            break;
            case '3': console.log("Usted recibirá ", (dinero*0.86)," EUR");
            break;
            default: console.log("Error, digite un numero de los presentados");
            break;
        }
    } else if(original == 3){
        otraMoneda = window.prompt("Excelente! Ahora seleccione la moneda a cambiar: 1.MXN 2.USD 3.EUR");
        switch (otraMoneda){
            case '1': console.log("Usted recibirá ", (dinero*0.18)," MXN");
            break;
            case '2': console.log("Usted recibirá ", (dinero*0.009)," USD");
            break;
            case '3': console.log("Usted recibirá ", (dinero*0.0078)," EUR");
            break;
            default: console.log("Error, digite un numero de los presentados");
            break;
        }
    } else if(original == 4){
        otraMoneda = window.prompt("Excelente! Ahora seleccione la moneda a cambiar: 1.MXN 2.USD 3.JPY");
        switch (otraMoneda){
            case '1': console.log("Usted recibirá ", (dinero*23.7)," MXN");
            break;
            case '2': console.log("Usted recibirá ", (dinero*1.16)," USD");
            break;
            case '3': console.log("Usted recibirá ", (dinero*128.81)," JPY");
            break;
            default: console.log("Error, digite un numero de los presentados");
            break;
        }
    }
    console.log("Gracias por usar nuestros servicios!")
}

forex();