const fruits = () => {
    if (true){
        var fruit1 = 'apple';
        let fruit2 = 'kiwi';
        const fruit3 = 'watermelon';
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits();
// ---------------------------------------------------------------------------------
// no se sobre escribe
let x = 1;

{
    let x = 2;
    console.log(x);
}

console.log(x);

// se sobre escribe la variable

var y = 1;

{
    var y = 2;
    console.log(y);
}

console.log(y);

// ------------------------------------------------------------------------------------------
// se sobre escribe el ultimo numero en todas las iteraciones

const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 2000)
    }
};
anotherFunction();


// con let no se sobreescribe

const anotherFunction2 = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 2000)
    }
};
anotherFunction2();