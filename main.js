
/*
1.Variables */
console.log("1. VARIABLES");

// a.	Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”

// alert("JavaScript funcionando correctamente");

// b.	Comenta el código que muestra el cuadro de diálogo



// c.	Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;

// d.	Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
const booleano1 = booleano2 = true;
console.log(typeof booleano1, typeof booleano2);

// e.	Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.1415;
console.log(PI);


// f.	Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = PI * 2;
console.log(TAU);

// g.	Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = "Kat";
console.log(miNombre);

// h.	Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFav = 7;
console.log(miNumeroFav);

// i.	Crea una variable de tipo booleano
const boolVariable = false;
console.log(boolVariable);

// j.	Muestra por consola la longitud de la variable miNombre
console.log(miNombre.length);


// k.	Muestra por consola el tipo de dato de la variable miNumeroFav
console.log(typeof miNumeroFav);

// l.	Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
console.log("Mi nombre es " + miNombre + " y mi número favórito es " + miNumeroFav);

// m.	Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
const frase = "Seré un crack en JavaScript al terminar el bootcamp";
console.log(frase.toUpperCase());

// n.	Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
const crack = "Hola soy un crack";
console.log(crack.substring(0,5));

// o.	Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
const miString = miNumeroFav.toString();
console.log(typeof miString);

// p.	Crea una variable y asignale un valor. Después utilizando template literal haz uso de la variable que habías creado, guarda el template literal en otra variable y sacala por consola.
 const dia = "Lunes";
 const diaHoy = `Hoy es ${dia}.`;
 console.log(diaHoy);
 
// q.	Muestra por consola la variable PI hasta los 2 primeros decimales

let piCorto = Math.round(PI * 100) / 100;
console.log(piCorto);


// 2.Arrays
console.log();
console.log("2. ARRAYS");

// a.	Crear variable de nombre arrayVacio cuyo valor sea un array vacío
const arrayVacio = [];
console.log(arrayVacio);

// b.	Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumeros);


// c.	Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)
const arrayNumeros2 = arrayNumeros;
arrayNumeros2[arrayNumeros2.length] = 10, 11, 12, 13, 14, 15;
console.log(arrayNumeros2);

// // d.	Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0, 2, 4, 6, 8];
console.log(arrayNumerosPares);

// e.	Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
console.log(arrayNumerosNeg);

// f.	Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = ["Hola", "Mundo"];

console.log(holaMundo);


// g.	Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
console.log(loGuardoTodo);



// h.	Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [[756, "Kat"], [225, "Bat"], [298, "Calle perdida"]];

console.log(arrayDeArrays);

// i.	Muestra por consola la longitud del array “loGuardoTodo”

console.log(loGuardoTodo.length);

// j.	Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola

loGuardoTodo.push("?");
console.log(loGuardoTodo);

// k.	Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo

console.log(loGuardoTodo[1]);

// l.	Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola

loGuardoTodo.splice(5, 0, "Euralio");
console.log(loGuardoTodo);




// 3.Objetos
console.log();
console.log("3. OBJETOS");

// a.	Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
const coche = {
    marca: "Ferrari",
    modelo: "8.1",
    matricula: "0293-jss"
}
console.log(coche);


// b.	Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores

const casa = {
    codPostal: "02066",
    calle: "calle Mar",
    portal: "19",
    piso: "2"
}

console.log(casa);

// c.	Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)

const fullStackDeveloper = {
    lenguajes: ["js", "html", "css"],
    proyectos: ["rampup", "ejercicios", "carta"],
}

console.log(fullStackDeveloper);


// d.	Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores

const perro = {
    nombre: "Roy",
    raza: "Pastor Aleman",
    color: "marrón",
    edad: "8",
}
console.log(perro);

// e.	Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores
const noticia = {
    titular: "El tiempo cambia",
    cuerpo: "Sube la temperatura"
} 

console.log(noticia);

// f.	Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores
const persona = {
    nombre: "Lola",
    apellidos: "García García",
    edad: "74"
}
console.log(persona);


// g.	Muestra por consola el nombre de la variable Persona
console.log(persona.nombre);


// h.	Muestra por consola el lenguaje javascript de la variable FullStackDeveloper
console.log(fullStackDeveloper.lenguajes[0]);


// i.	Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola
const portatil = {
    marca: "Asus"
}
console.log(portatil);

// j.	Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola
console.log(portatil.marca);


// k.	Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola
const concierto = {
    grupos: ["Happypop", "Loudest", "Punk Death"]
}

console.log(concierto.grupos);


// l.	Crea un objeto de nombre Led, con las propiedades: lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola.
const led = {
    lampara1: "rojo",
    lampara2: "verde",
    lampara3: "azul"
}

const rgb = Object.values(led);
console.log(rgb);


// La array por consola debería mostrarse así [‘rojo’,’verde’,’azul’]


// m.	Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola

const o_error = {
    codigo: "404"
}
console.log(o_error);
console.log(`Se ha producido error ${o_error.codigo}`);

// n.	Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes

const grupo = {
    integrantes: ["Pete", "Bea", "Jim"],
}

console.log(grupo.integrantes[2]);

// o.	Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola
const impresora = {
    tinta: {
        rojo: "alto",
        verde: "bajo",
        azul: "acabado"
    }
}
const nivelesTinta = impresora.tinta
console.log(nivelesTinta);

// p.	Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola
const movil = {
    especificaciones: ["bluetooth", "cámara",]
}

const especificaciones = movil.especificaciones;
console.log(especificaciones);


// q.	Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
portatil.marca = "MSI";
console.log(portatil.marca);


// r.	Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado
concierto.grupos.push("Guns N' Roses");
console.log(concierto.grupos);

// s.	Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy, investiga que es new Date y como usarlo), consolea el resultado
concierto.fecha = "17 Junio";
console.log(concierto);
concierto.fecha = new Date("2023-06-20");
console.log(concierto.fecha);


// t.	Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)
grupo.integrantes.pop();
console.log(grupo.integrantes.length);
