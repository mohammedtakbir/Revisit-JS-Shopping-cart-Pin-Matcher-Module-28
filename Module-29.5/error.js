//* RangeError
let num = 1;
// console.log(num.toPrecision(200)) //? RangeError: toPrecision() argument must be between 1 and 100
const arr = [2, 5, 7, 3];
// console.log(arr[10])
//! should not use this way
arr.length = 2;
// console.log(arr)

// console.log(throw new RangeError(wef))

//* ReferenceError
// console.log(refer); // ?ReferenceError: refer is not defined
// let refer = '0';

// console.log(testVar); //? return undefined because var is hoisted;
// var testVar = 0;

//* SyntaxError
// for(let i = 0 i++){ //?SyntaxError: Unexpected identifier

// }

const obj = {name: 'takbir'};
// console.log(obj.map(t => {console.log(t)})) //? TypeError: obj.map is not a function