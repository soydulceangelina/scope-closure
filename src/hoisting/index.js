// levantamiento o elevar las declaraciones

// aun y cuando la declaracion esta abajo, el hoisting en js
//  eleva la declaracion cuando se esta compilando el codigo

a = 2;
var a;
console.log(a);//2

// --------------------------------------------------------------------------------
// el hoisting solo aplica en las declaraciones y no en las iniciaizaciones, como es este caso

console.log(a);
var a = 2;//undefined

// ---------------------------------------------------------------------------------------
el motor que compila en js, antes de ser interpretado por el navegador lee primero las 
funciones o asignaciones, las ajusta y adapta, levanta la funcion.

nameOfDog('Snoopie');

function nameOfDog (name) {
    console.log(name);
}

//Snoopie