// Day 9
// minMax

// var min = function (list) {

//     let minValue = list[0];
//     for (let i = 1; i < list.length; i++) {
//         if (minValue > list[i]) {
//             minValue = list[i];
//         }
//     }
//     return minValue;
// }

// var max = function (list) {

//     let maxValue = list[0];
//     for (let i = 1; i < list.length; i++) {
//         if (maxValue < list[i]) {
//             maxValue = list[i];
//         }
//     }
//     return maxValue;
// }



// Sort method 

// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];


// Math method

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);



console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));