// MATH FUNCTIONS
// 1-MASALA
// let randomNumbers = Math.trunc(Math.random() * 100) + 1;
// console.log(randomNumbers);

// 2-MASALA

// let num = +prompt("Sonni kiriting:");
// let kvNum = num >= 0 ? Math.trunc(Math.sqrt(num)) : "Musbat son kiriting";

// console.log(kvNum);

// 3-MASALA
// let num1 = +prompt("1-sonni kiriting:");

// let maxNum = num1;
// let minNum = num1;

// for (let i = 2; i <= 5; i++) {
//   let num = +prompt(`${i}-sonni kiriting:`);

//   maxNum = Math.max(maxNum, num);
//   minNum = Math.min(minNum, num);
// }

// console.log("Eng katta son: " + maxNum +  "\nEng kichik son: " + minNum);

// 4-MASALA

// let num = +prompt("Haqiqiy son kiriting:");

// let numUp = Math.ceil(num);
// let numDown = Math.floor(num);

// console.log(
//   "Yuqoriga yaxlitlash: " + numUp + "\nPastga yaxlitlash: " + numDown
// );

// 5-MASALA
// let radius = +prompt("Aylana radiusini kiriting:");

// let uzunlik = 2 * Math.PI * radius;

// console.log("Aylananing uzunligi: " + uzunlik);

// TERNARY OPERATOR

// 1-MASALA

// let num = +prompt("Sonni kiriting:");
// let res = num >= 0 ? "Musbat son" : "Manfiy son";
// console.log(res);

// 2-MASALA

// let num = +prompt("Sonni kiriting:");
// let res = num >= 18 ? "Ruxsat etilgan" : "Ruxsat etilmagan";
// console.log(res);

// 3-MASALA

// let num = +prompt("Sonni kiriting:");
// let res = num % 2 == 0 ? "Just son" : "Toq son";
// console.log(res);

// FOR SIKL OPERATOR

// 1-MASALA

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0 && i >= 0) {
//     console.log(i);
//   }
// }

// 2-MASALA

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(i + "-sonni kiriting:");
//   sum += (num > 0) ? num : 0;
// }
// console.log(sum);

// 3-MASALA

// for (let i = 1; i <= 100; i++) {
//   if (i >= 30 && i <= 50) {
//     console.log(i);
//   }
// }

// 4-MASALA

// let counter1 = 0;
// let counter2 = 0;

// for (let i = 1; i <= 15; i++) {
//   let num = +prompt(i + "-sonni kiriting:");
//   num >= 0 ? counter1++ : counter2++;
// }

// console.log("Musbat son:", counter1);
// console.log("Manfiy son:", counter2);

// 6-MASALA

// let sum = 0;

// for (let i = 1; i <= 50; i++) {
//   sum += i % 2 === 0 ? i : 0;
// }

// console.log(sum);

// 7-MASALA

// for (let i = 1; i <= 5; i++) {
//   let age = +prompt(i + "-odamning yoshini kiriting:");
//   res = age >= 18 ? "Voyaga yetgan" : "Voyaga yetmagan";
//   console.log("Odam " + i + ": " + res);
// }

// 8-MASALA

// let counter = 0;
// for (let i = 1; i <= 100; i++) {
//   i % 2 == 0 ? counter++ : counter;
// }

// console.log(counter);

// 9-MASALA

// let counter = 0;

// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(i + "-sonni kiriting:");
//   res = num >= 5 && num <= 10 ? counter++ : counter;
// }

// console.log(counter);

// 10-MASALA

// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(i + "-sonni kiriting");
//   num > 0 ? console.log(num) : 0;
// }

// 11-MASALA

// let counter1 = 0;
// let counter2 = 0;
// for (let i = 1; i <= 15; i++) {
//   let num = +prompt(i + "-sonni kiriting:");
//   res =
//     num % 2 == 0 ? counter1++ : counter1 || num <= 0 ? counter2++ : counter2;
// }

// console.log("Just son:", counter1);
// console.log("Manfiy son:", counter2);

// 12-MASALA

// for (let i = 1; i <= 50; i++) {
//   i % 3 == 0 ? console.log(i) : null;
// }

// 14-MASALA

// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(i + "-sonni kiriting:");
//   num >= 50 ? console.log(num) : null;
// }

// 15-MASALA
// let counter = 0;
// for (let i = 1; i <= 10; i++) {
//   let num = +prompt(i + "-sonni kiriting:");
//   num === 0 ? console.log("0 mavjud") : null;
// }
