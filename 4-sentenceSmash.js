// Day 4
// Sentence Smash

// function smash(words) {
//     return words.join(' ');
// };




// Looping Method
// let smash = function (words) {
//     let result = '';
//     for (i = 0; i < words.length; i++) {
//         result += words[i];
//         if (i != words.length-1) {
//             result += ' ';
//         } else {
//             result += '';
//         }
//     }

//     return result
// }

// Arrow Function Expression
const smash = (words) => words.join(' ');

console.log(smash(['hello', 'world', 'this', 'is', 'great']))