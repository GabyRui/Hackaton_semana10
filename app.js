//PREGUNTA 1 ----------------------------------

/* const history = 20
const math =  18
const trigonometria = 15
const english =  18

function promedio(a,b,c,d) {
    const sumaNotas = (a + b + c + d);
    const totalExamenes = 4;
    const promedio =  sumaNotas / totalExamenes;
    return promedio;
}

const promedioAlumnos = promedio(history, math, trigonometria, english);

console.log(`El promedio final es de ${promedioAlumnos}`) */


//PREGUNTA 2 ----------------------------------

//La unidad de medición es en centímetros.

/* const largoRectangulo = 20;
const anchoRectangulo = 30;

function area (a,b) {
    const areaRectangulo = (a * b);
    return areaRectangulo;
}

const areaResultado = area(largoRectangulo, anchoRectangulo);

console.log(`El área del rectángulo es de ${areaResultado}`); */

//PREGUNTA 3 ----------------------------------

//La unidad de medición es en centímetros.

/* const baseTriangulo = 10;
const alturaTriangulo = 30;

function area (a,b) {
    const areaTriangulo = (a * b) / 2
    return areaTriangulo;
}

const areaFinal = area(baseTriangulo, alturaTriangulo);

console.log(`El área del triángulo es de ${areaFinal}`); */

//PREGUNTA 4 ----------------------------------

//La unidad de medición es en centímetros.

/* const pi = 3.14;
const radio = 6;

function areaPi(a,b){
    const area = (a * (b ** 2));
    return area;
}

const areaResultante = areaPi(pi, radio);
console.log(`El área de la circunferencia es de ${areaResultante}`); */

//PREGUNTA 5 ----------------------------------

/* const horasLaboradas = 8 * 7;
const salarioDefinido = 40;

function sueldoSemanal(a,b) {
    const sueldoSemanal = (a * b);
    return sueldoSemanal;
}

const sueldoFinal = sueldoSemanal(horasLaboradas, salarioDefinido);

console.log(`El sueldo semanal del trabajador es de ${sueldoFinal}`); */

//PREGUNTA 6 ----------------------------------

/* const soles = 40;
const tipoCambio = 3.73;

function calculoDolar (a,b) {
    const calculoDolarResultado = (a / b);
    return parseInt(calculoDolarResultado);
}

const dolaresAdquiridos = calculoDolar (soles, tipoCambio);

console.log(`La empresa podrá adquirir ${dolaresAdquiridos} dólares`); */

//PREGUNTA 7 ----------------------------------

const arreglo = [4, 8, 5, 7];

function calculo (arreglo) {
    const calculoFinal = arreglo[arreglo.length - 1];
    return calculoFinal;
}

const resultadoFinal = calculo(arreglo);
/* console.log(resultadoFinal); */


//PREGUNTA 8 -------------------------------------

const newArreglo = [2, 7, 5, 11];
const number = 9;

function agregarNumber(arreglo, number) {
    const arregloAñadido = [...arreglo, number];
    return arregloAñadido;
}

const arregloFinal = agregarNumber(newArreglo, number);
/* console.log(arregloFinal); */


//PREGUNTA 9 -------------------------------------

function hallarPromedio(arregloNum) {

    let sumaArray = 0

    for (let i = 0; i < arregloNum.length; i++){
        sumaArray += arregloNum[i];
    }
    const promedio = sumaArray / arregloNum.length;
    return promedio;
}

const arregloNumber = [2, 6, 1, 8];
const resultadoPromedio = hallarPromedio(arregloNumber);
/* console.log(`El promedio es de ${resultadoPromedio}`); */

//PREGUNTA 10 -------------------------------------

function calculoPar(arreglo) {

    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            suma += arreglo[i];
        }
    }
return suma;
}

const arregloNew = [1, 2, 5, 8, 9, 12, 2, 3];
const results = calculoPar(arregloNew);
console.log(results);

//PREGUNTA 11 ------------------------------------------------

function booleanArray (a1,b2) {
    let arregloNuevo = [...a1, ...b2];
    let arreglo3 = false;

    for (let i = 0; i < arregloNuevo.length; i++) {
        if (arregloNuevo.length >= 10){
            arreglo3 = true;
        }

        else {
            arreglo3 = false;
        }
    }
    return(`El nuevo arreglo generado es [${arregloNuevo}] y su valor es ${arreglo3}`);

}

const resultadoArreglo = booleanArray([2, 5, 2, 3, 7, 2], [1, 5, 3, 3]);
console.log(resultadoArreglo);

//PREGUNTA 12 -------------------------------------

function multiplicado (array1, array2){

    const newFunction = [...array1, ...array2];

    for (let i = 0; i < newFunction.length; i++){
        newFunction[i] *= 2;
    }

    return newFunction;
}

const arregloNew1 = [2, 5, 2];
const arregloNew2 = [1, 5, 3];
const resultFinal = multiplicado(arregloNew1, arregloNew2);
console.log(resultFinal);


//PREGUNTA 13 -------------------------------------

let personas = [
    { nombre: 'boris', hobby: 'correr', salario: 2000 },
    { nombre: 'luis', hobby: 'cantar', salario: 1500 },
    { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
    { nombre: 'percy', hobby: 'cantar', salario: 1100 },
    { nombre: 'rosa', hobby: 'leer', salario: 3000 },
    ];

//Salario mayor a 1200

const salarioMayor = personas.filter(sueldo => (sueldo.salario) >= 1200)
.map(persona => persona.nombre);

console.log(salarioMayor);

//¿Quién es el primero que tiene como hobby cantar?

const hobbyParticular = personas.find(canto => (canto.hobby) === 'cantar');
console.log (hobbyParticular.nombre);


//Booleano: Si al menos a algunos de la lista les gusta leer.

const gustoLectura = personas.some(gustos => gustos.hobby === 'leer');
console.log(gustoLectura);


//PREGUNTA 14 -------------------------------------

const turnosSemanales = [

   {dia: 'lunes', persona:'María'},
   {dia: 'martes', persona:'Luis'},
   {dia: 'miercoles', persona:'Antonia'},
   {dia: 'jueves', persona:'Pedro'},
   {dia: 'viernes', persona:'Marisa'},
]

function diaAcargo (diaIngresado, arregloPersona) {
    let persona = 'no hay servicio'
    for (let i = 0; i < arregloPersona.length; i++) {
        if (arregloPersona[i].dia === diaIngresado) {
            persona = arregloPersona[i].persona;
        }
    }
    return persona;
}

const resultados = diaAcargo('viernes', turnosSemanales);
console.log(resultados);


//PREGUNTA 15 -------------------------------------

const productos = [

    {producto: 'monitor', precio: 200},
    {producto: 'teclado', precio: 20},
    {producto: 'ratón', precio: 10},
 ]

 const consulta = prompt("¿De qué producto desea consultar el precio: monitor, teclado o ratón?");


 function electronica (pregunta, arregloProducto) {

    for (let i = 0; i < arregloProducto.length; i++) {
      
        if (pregunta === arregloProducto[i].producto){
            return arregloProducto[i].precio;
        }

    } 
        return 'Lo siento, no disponemos precio del artículo indicado';
 }

 const electronicaResult = electronica(consulta, productos);
 console.log(electronicaResult);



