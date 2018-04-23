// const square = function (x) {
//     return x * x;
// };
//
// // NOTE: ES6 functions are always anonymous
// // const squareArrow = (x) => {
// //   return x * x;
// // };
//
// // Arrow function expression (We don't use return) Used when there is only one line return code in function
// const squareArrow = (x) => x * x;
//
// console.log(squareArrow(9));


// Challenge

// let firstName;

// const getFirstName = (fullName) => {
//     if(fullName) {
//         firstName = fullName.split(' ')[0];
//     }
//     return firstName;
// };

//Arrow function using shorthand
const getFirstName = (fullName) => fullName ? fullName.split(' ')[0] : null;

console.log(getFirstName('Mike Smith'));
