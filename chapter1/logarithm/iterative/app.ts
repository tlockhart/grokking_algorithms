const logarithm = (base) => {
    let items = 8;
    let quotient = 0;
    let divisions = 0;

    while (quotient !== 1) {
        quotient = items/base;
        console.log("Quotient = ", quotient);
        items = quotient;
        divisions++;
    }
    return divisions;
}
console.log("How many divisions are possible?", logarithm(2));