// const multiplayBase = (base, product) => {
//     let value = product * 2;
//     console.log("Value:", value);
//     return value;
// }
// const logarithm = (base: number): number => {
//     // how many times do I multiply 2 to get the number items
//     let divisions = 0;
//     let product = 1;
//     let items = 8;

//     // recursive case
//     if (product < items) {
//         console.log(`Product: ${product} <  Items: ${items}`);
//         product = multiplayBase(base, product);
//         divisions = divisions + 1;
//         return logarithm(base) + logarithm(base);
//     }
//     if (product === items) {
//         console.log(`Product: ${product} === Items: ${items}`);
//         return divisions;
//     }

// }

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