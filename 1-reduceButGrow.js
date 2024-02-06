// Day 1/100

// function grow(x) {
//     let result = x[0];
//     for (i = 1; i < x.length; i++) {
//         result *= x[i];

//     }
//     return result;
// }

function grow(x) {

    const result = x.reduce((acc, current) => acc * current, 1);
    return result;
}

console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));

// with function expression arrow fnc

const growUp = (y) => y.reduce((acc, curr) => acc * curr, 1);

console.log(growUp([2, 4, 6, 8]));