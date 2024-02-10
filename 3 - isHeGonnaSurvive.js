// Day 3 Is He Gonna Survive?

// function hero(bullets, dragons){
//     if (bullets >= 2 * dragons) {
//       return true
//     } else {
//       return false
//     }
//   }

const hero = (bullets, dragon) => bullets >= dragon * 2;

console.log(hero(4, 2));