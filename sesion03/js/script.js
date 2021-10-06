/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Ivan"
    input Apellido = "Diaz"
    Output: "ivan DIAZ"
*/


function nombreCompleto(){
    let nombre, apellido;
    nombre = window.prompt("Por favor, teclee su(s) nombre(s)");
    apellido = window.prompt("Por favor, digite sus apellidos");
    return console.log(nombre.toLocaleLowerCase(), apellido.toLocaleUpperCase());
}

nombreCompleto();

/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

function nameLength(){
    let name;
    name = window.prompt("Teclee su nombre para saber cuantos caracteres tiene:");
    return console.log("El numero de caracteres es: ", name.length);
}

nameLength();
/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

// function vocales(){
//     let nombreVocales = window.prompt("Teclee el nombre del cual quiere saber las vocales");
//     const myArr = nombreVocales.split("");
//     let j = 0;
//     for (let i =0; i<=myArr.length; i++) {
//         if (myArr[i] = "a" || "e" || "i" || "o" || "u"){
//             j++
//         }
//     }
//     console.log('El numero de vocales es', j)
// }

function vocales (){
    const nombreVocales = prompt("Cual es tu nombre?");
    const coincidencia = nombreVocales.match(/[aeiou]/g);
    console.log(coincidencia);
    console.log(`Esta palabra contiene ${coincidencia.length} vocales`);

}
vocales();

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
function substitute(){
    let frase = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
    const coincidencias = frase.match(/estudiante/g);
    console.log(`Esta palabra contiene la palabra estudiante ${coincidencias.length} veces`);
    let nuevaFrase = frase.replace(/estudiante/g, "Koder");
    return console.log(nuevaFrase);
}
substitute();

/*
Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/
function palabraLarga(){
    let palabraUno = window.prompt("Escriba la primera palabra");
    let palabraDos = window.prompt("Escriba la segunda palabra");
    if (palabraUno.length > palabraDos.length){
        console.log(palabraUno);
    } else if (palabraDos.length > palabraUno.length){
        console.log(palabraDos);
    } else {
        console.log("Ambas palabras tienen los mismos caracteres");
    }

}
palabraLarga();