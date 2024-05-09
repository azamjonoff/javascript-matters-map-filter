// function oddNum(array) {
//   const arr = [1, 4, 6, 5];
//   const toq = [];

//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       toq.push(arr[i]);
//     }
//   }
//   console.log(toq);
// }
// oddNum();

// import products from "./data.js";

// let cheapProducts = [];

// products.forEach((product) => {});

// console.log(cheapProducts);

// UYGA VAZIFA

// 1)

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {
//   const gradeBoundary = { 5: [85, 100], 4: [70, 85], 3: [60, 70] };
//   const gradeStudents = students.map((student) => {
//     let grade;
//     for (const [key, value] of Object.entries(gradeBoundary)) {
//       if (student.percent >= value[0] && student.percent <= value[1]) {
//         grade = parseInt(key);
//         break;
//       }
//     }
//     return { ...student, grade };
//   });
//   const gradeFilteredStudents = gradeStudents.filter(
//     (student) => student.grade === grade
//   );
//   return gradeFilteredStudents.map((student) => student.name);
// }

// console.log(getNamesByGrade(students, 5));

// 2)

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const wordCount = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});

// console.log(wordCount);

// 3)

// const inputArray = [1, 2, 3, 4, 5];
// const squaredArray = inputArray.map(num => num ** 2);
// console.log(squaredArray);

// 4)

// const inputArray = [ 1, -4, 12, 0, -3, 29, -150];
// const sumOfPositives = inputArray.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
// console.log(sumOfPositives);

// 5)

// const input = 'George Raymond Richard Martin';
// const initials = input.split(' ').map(word => word[0]).join('');
// console.log(initials);

// 6)

// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
//   ];

//   people.sort((a, b) => a.age - b.age);
//   const youngest = people[0];
//   const oldest = people[people.length - 1];
//   const ageDifference = oldest.age - youngest.age;
//   console.log(ageDifference);

// 7)

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNumbers = inputArray.filter(num => num % 2 === 0);
// const oddNumbers = inputArray.filter(num => num % 2 !== 0);
// console.log("Even numbers:", evenNumbers);
// console.log("Odd numbers:", oddNumbers);

// 8)

// const inputArray = [1, 2, 3, 2, 4, 5, 6, 5, 7, 8, 9];
// const uniqueValues = inputArray.reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(uniqueValues);

// 9)

// const products = [
//   { id: 1, name: "Product 1", price: 10, rating: 4.5, discount: 0 },
//   { id: 2, name: "Product 2", price: 20, rating: 3.8, discount: 5 },
//   { id: 3, name: "Product 3", price: 15, rating: 4.2, discount: 10 },
// ];

// products.sort((a, b) => {
//   if (a.price !== b.price) {
//     return a.price - b.price;
//   }
//   if (a.rating !== b.rating) {
//     return b.rating - a.rating;
//   }
//   return a.discount - b.discount;
// });
// console.log(products);

// 10)

// const highestRatedProduct = products.sort((a, b) => b.rating - a.rating)[0];
// console.log(highestRatedProduct);

// 11)
