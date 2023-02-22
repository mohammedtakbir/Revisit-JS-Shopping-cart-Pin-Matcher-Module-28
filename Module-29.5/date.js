// const date = new Date();
// const date1 = date.toUTCString().slice(0, 17)
// const hour = parseFloat(date.toUTCString().slice(17, 19)) + 6;
// const minutes = date.toUTCString().slice(20, 22);
// const seconds = date.toUTCString().slice(23, 25);

// const time = {
//     date: `${date1}`,
//     time: `Seconds: ${seconds}, Minutes: ${minutes}, Hour: ${hour}`
// }
// console.log(time)

//? Date objects are created with the new Date() constructor.
//? There are 9 ways to create a new date object:

// console.log(new Date())

//* date string
// console.log(new Date("2022-03-25"))

//* year, month, day
// console.log(new Date(2000, 3, 03))

//* toDateString()
// console.log(new Date().toDateString()) //? return Wed Feb 22 2023

//* toUTCString()
// console.log(new Date().toUTCString()) //? Wed, 22 Feb 2023 08:08:01 GMT
const minutes = new Date().getMinutes();
const hours = new Date().getHours();
const amOrPm = hours >= 12 ? 'PM' : 'AM';
const hourFormat12 = hours % 12;
const time = `${hourFormat12}:${minutes} ${amOrPm}`;
// console.log(time, new Date().toDateString());
console.log(time);
