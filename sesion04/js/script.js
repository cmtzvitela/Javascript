// const nombres = [
//     {nombre:'Freddy'},
//     {nombre: 'Michael'},
//     {nombre: 'Rafa'}
// ];

// const person = [
//     {nombre:'Freddy'},
//     {apellido: 'Krueger'},
//     {age: '40'}
// ];

// for(let i=0; i <nombres.length; i++) {
//     console.log(nombres[i].nombre)
// }                   

// let vuelta = 0;
// while(vuelta <10) {
//     console.log(vuelta)
//     if(vuelta% 2 ===0){
//         console.log(`${vuelta} es par`);
//     } else {
//         console.log(`${vuelta} es impar`);
//     }
//     vuelta++;
// }

//Para recorrer un objeto   
// for (killer in person) {
//     console.log(person[killer]);
// }


/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

function multiplicar(){
    let base = window.prompt("Escriba un numero del 1 al 10");
    let longitud = window.prompt("Cuantas operaciones quiere que se muestren");
    for(i = 1; i<=longitud; i++) {
        console.log(base, " * ", i, " = ", (base*i));
    }
}
multiplicar();

/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

function pares(){
    let cantidad = window.prompt("Escriba un numero del 1 al 100");
    for (i=1;i<=cantidad;i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
}

pares();
/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/

function sumaRara() {
    let numero = window.prompt("Digite un numero para sumar sus digitos");
    let individuales = numero.split("");
    let suma = 0;
    console.log(individuales);
    for (let i = 0; i < individuales.length; i++){
        suma = suma + parseInt(individuales[i]);
    }
    console.log(`La suma de los digitos es ${suma}`);
}

sumaRara();

/*
Ejercicio 4:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/

function asterisco(){
    let asteriscos = window.prompt("Cuantas lineas quiere imprimir?");
    let i =0;
    let linea = "";
    while (i <asteriscos){

        console.log(linea + "*");
        linea = linea + "*";
        i++;
    }
}

asterisco();

//Ejercicio 5
// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios, 
// la longitud del string debe ser igual que el numero que ingreso el usuario

// input : 6
// output: '?AQX>H'

// const numberUser = Number(prompt('Elige un numero de seis digitos'));

function createRandomString (){
    const numberRandom = Math.floor(Math.random()* (90-48) + 48);
    const string = 'asdasd';

    const newString = String.fromCharCode(numberRandom);
    console.log(newString);
    return numberRandom;
}

let result = '';
for (let i = 0; i < numberUser; i++) {
    result += createRandomString();
}
console.log(result);

createRandomString();

//Ejercicio 6
//Input: 'abcdefg'
//Output: 'AbCdEfG'

let input = prompt("Escriba la frase que desee");
let output = "";

function minMay() {
    for (i = 0; i<input.length; i++){
        if ( i % 2 === 0){
            output += input.charAt(i).toUpperCase();
        } else {
            output += input.charAt(i).toLowerCase();
        }
    }
    return console.log(output);
}

minMay();

