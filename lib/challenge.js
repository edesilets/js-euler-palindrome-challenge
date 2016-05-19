'use strict';

let IsPalindromeString = function (number) {
let arr = ['cat','dog'];
    let numm = number.toString();
    console.log('var one ',numm);
    arr = numm;
    console.log('var arr: ',arr);
    return arr.reverse();
};

//main functions
const limit = 1000000;
let result = 0;

for (let i = 1; i < limit; i += 2) {
    if (IsPalindromeString(i, 10) && IsPalindromeString(i, 2)) {
        result += i;
    }
}
//
// let pal = function createPalindrome (input, b, isOdd) {
//     n = input;
//     palin = input;
//     if (isOdd) {
//         n /= b;
//     }
//
//     while (n > 0) {
//         palin = palin * b + (n % b);
//         n /= b;
//     }
//     console.log(palin);
//     return palin;
// };
//
module.exports = () => {
  return true;
};
