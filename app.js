"use strict";

// destructuring
// 01 Array destructuring
// const numbers = [10, 20, 30, 40, 50]
// const myNum = numbers [2];
// const myNum = numbers.at(-3);
// const myNum = numbers.at(-4);
// console.log(myNum);

// const [a, b, c, d, e,] = numbers;
// console.log(a, b, c, d, e);

// const [num1, num2, num3, num4, num5,] = numbers;
// console.log(num1, num2, num3, num4, num5,);

// const friends = ["rahat", "fahat", "mira", "fahim"];
// const [bestFriend, closeFriend, schoolFriend, childhoodFriend] = friends;
// const [friend1, friend2, , friend3] = friends;

// console.log(friend1, friend2, friend3)

// console.log(bestFriend);
// console.log(closeFriend);
// console.log(schoolFriend);
// console.log(childhoodFriend);

// let a = 1;
// let b = 2;
// let c;

// [a, b] = [b, a];

// c = a;
// a = b;
// b = c;

// console.log(a, b);

// nested array des.

// const myArr = [1, 2, 3, [4, 5]];
// const [, x, , [, y]] = myArr;

// // console.log(x, y);

// const tools = ["js", "ts", ["react", ["next", "gatsby", ["remix"]]]];
// const [js, , [react, [next, , [remix]]]] = tools;

// console.log(js, react, next, remix);

// // 02 object destructuring

// const animal = {
//   animalName: "cat",
//   age: 2,
//   foods: ["milk", "fish"],
//   // variant: "white",
//   enemies:{
//     enemy1: "Dog",
//     enemy2: "mouse",
//   }
// };


// // const {
// //   age,
// //   foods:[food1, food2],
// // } = animal;

// // console.log(age, food1, food2);

// // console.log(animalName, age, food1, food2);

// const { age: petAge, animalName: petName, variant = "black", enemies: {enemy1, enemy2},
// } = animal;

// // console.log(petAge, petName, variant);

// // spread operator
// const arr1 = [1, 2, 3]; //1 - 3000
// const arr2 = [4, 5, 6];
// // const arr3 = [arr1[0], arr1[1], arr1[2], arr2[0], arr2[1], arr2[2],]
// const arr3 = [...arr1, ...arr2];

// // console.log(arr3)

// const Obj1 = {
//   name: "mim",
//   age: 20,
// }

// // const obj2 = Obj1;
// // obj2.name = "rita";

// // console.log(Obj1);
// // console.log(obj2);

// const obj2 = { ...Obj1 };

// obj2.name = "rita"

// // console.log(Obj1);
// // console.log(obj2);

// //rest pattern--> array

// const evenNums = [10, 20, 15, 25, 30, 35];

// const [even1, even2, , , ...others] = evenNums;

// // console.log(even1, even2, others);

// //rest pattern--> obj
// const student = {
//   name: "mamun",
//   age: 20,
//   roll: 100,
// };

// const {name, ...rest} = student;

// // console.log(rest)
// //rest param
// // ...arr --> spread --> unpack
// //...param --> rest --> pack

// function sum (a, b, ...args) {
//   console.log(args);
//   return a + b;
// }

// const arrTest = [7, 6];
// // console.log(sum(5, 8));

// console.log(sum(...arrTest, 8, 10, 12));

// const doMath = (x, y, ...args) => {
//   const result = x - y;
//   let sum = 0;
  
//   for(let i = 0; i <args.length; i++) {
//     sum += args[i];
//   }

//   return{
//     subtract: result,
//     sum: sum,
//   };
// };

// // console.log(doMath(10, 2, 4, 5, 7, 3, 9, 8));

// const doMath2 = (a, b, ...args) => {
//   const sum = a + b;

//   const subtract = a - b;

//   let product = 1; 

//   for(let i = 0; i < args.length; i++) {
//     product *= args[i];
//   };

//     return{
//       sum,
//       subtract,
//       product,
//     };
// };

// const testArr = [2, 4, 6, 9, 4, 6];

// console.log(doMath2(10, 5, ...testArr));

//short circuiting
// const isWinter = false;
// const product = isWinter && "Buy hoodie"; //"Buy t-shirt";

// // console.log(product);
// const number = 0 ;

// const newNumber = number ?? 100; //nullish coalsing operator
// console.log(newNumber);
// number >= 10 && console.log("10");

// console.log(number || "0");

// for of loop
const oddNums = [11, 23, 34, 67, 12];
for (let i = 0; i < oddNums.length; i++) {
  console.log(oddNums[i]);
}

for (const num of oddNums) {
  console.log(num);
}

const friendsMERN = ["shamim", "kaushik", "Shakil"];

for (const friend of friendsMERN) {
  console.log(friend);
};
//optional chaining

const subjects = {
  total: 5,
  best: "Physics",
  wellPerformed: {
    markWise: "Chemistry",
    skillWise: "Math",
    creativity: {
      indoor: "karate",
      outdoor: "Swimming",
    },
  },
};

console.log(subjects.wellPerformed.creativity.outdoor.marks?. grade);