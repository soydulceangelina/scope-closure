// solo var se puede reasignar, pero es una mala practica
var hello = 'Hello 1';
let hello2 = 'Hello 2';
const hello3 = 'Hello 3';

const anotherFunction = () => {
    console.log(hello);
    console.log(hello2);
    console.log(hello3);
}

anotherFunction();
