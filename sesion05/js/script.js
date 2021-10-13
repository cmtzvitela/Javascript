//Ejercicio 1
// Crear funcion que permita indicar la cantidad de koders a guardar,
// que pida tantos nombre completos de koders como se haya indicado, y 
// que imprima el nombre del koder y su numero asignado.

// Ejemplo:
// input   
//    - Freddy Krueger
//    - Michael Myers
//    - Jason Vorhees

// output: 
//     koder 1: Freddy Krueger
//     koder 2: Michael Myers
//     koder 3: Jason Vorhees

let arrayKoders = [];
let numKoders = window.prompt("Cuantos koders tendrá la lista?");

function listaKoders(){
    for (i = 1; i <= numKoders ; i++){
        let koder = window.prompt(`Nombre del koder ${i}`);
        let koderSeparado = koder.split(' ');
        const nombre = koderSeparado[0].charAt(0).toUpperCase();
        const apellido = koderSeparado[1].charAt(0).toUpperCase();
        console.log(`Koder ${i}: ${arrayKoders[i-1]} (${nombre}.${apellido})`);
        const person = {
            id: i,
            nombre: koderSeparado[0],
            apellido: koderSeparado[1],
            iniciales:`(${nombre}.${apellido})`,
        }
        arrayKoders.push(person);
        console.log(person);
    } 
}

listaKoders();

//Ejercicio 2
//Input : Kodemia
//Output aimedoK

// let palabra = window.prompt("Escriba una palabra para voltear");
// let arraypalabra = palabra.split('');
// console.log(arraypalabra);
// let newWord = '';

// function voltear(){
//     for(i = (arraypalabra.lenght-1); i = 0; i--){
//         newWord = newWord + arraypalabra[i];
//     }
//     console.log(`La nueva palabra es: ${newWord}`);
// }

// voltear();