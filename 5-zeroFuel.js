// Day 5


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //   // TODO
  //   if (distanceToPump <= mpg * fuelLeft) {
    //     return true;
//   } else {
//     return false
//   }
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft;


console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 25, 2));