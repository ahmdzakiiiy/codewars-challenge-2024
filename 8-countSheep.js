// Day 8
// If you can't sleep, just count Sheep!


// var countSheep = function (num) {
//     //your code here

//     let result = '';
//     for (let i = 1; i <= num; i++) {
//         // result += (i + ' sheep...');
//         result += `${i} Sheep..., `
//     }
//     return result
//   }


const countSheep = (num) => [...Array(num)].map((el, i) => `${i + 1} Sheep... `).join('');

console.log(countSheep(4));