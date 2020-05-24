// aqui se ve correctamente una variable local

const helloWorld = () => {
    const hello = 'Hello world';
    console.log(hello);
}

helloWorld();

// aqui se ve como una variable local no puede ser llamada desde el scope global

const helloWorld2 = () => {
    const hello2 = 'Hello world 2';
}

helloWorld2();
console.log(hello2);

// aqui vamos a ver el ambito lexico

var scope = 'I am global';

const functionScope = () => {
    var scope = 'I am just a local';
    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);