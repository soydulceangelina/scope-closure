const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
}

let mycount = buildCount(1);
mycount();
mycount();
mycount();
