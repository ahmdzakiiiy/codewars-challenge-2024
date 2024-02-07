// const reverseSeq = n => {
//     let sequence = []
//     for (i = n; i >= 1; i--) {
//         sequence.push(i);
//     }
//     return sequence
// };


// Day 2/100

const reverseSeq = n => {
    // return Array(n).fill().map((el, i) => i + 1).reverse();
    return[ ...Array(n)].map((el, i) => i + 1).reverse();
}

console.log(reverseSeq(5));