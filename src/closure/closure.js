// Closure es la combinacion de una funcion y el ambito lexico en la 
// cual fue declarada esta funcion.
// El closure recuerda el ambito donde ha sido creado.

// no me esta guardando la info, no tiene closure

const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money box: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

// con closure

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money box $${saveCoins}`);
    }
    return countCoins;
}

let myMoney = moneyBox();
myMoney(2);
myMoney(7);