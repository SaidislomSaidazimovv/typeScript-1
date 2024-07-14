// Lesson - 1

// function inner(obj, n) {
//   const res = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       res[key] = obj[key] * n;
//     }
//   }
//   return res;
// }

// const n = 3;
// const obj = { a: 2, b: 3, c: 4 };
// const res = inner(obj, n);
// console.log(res);

// Lesson - 2

// function countString(str) {
//   const words = str.split(" ");
//   let count = 0;

//   for (let word of words) {
//     if (word.includes("a") || word.includes("A")) {
//       count++;
//     }
//   }

//   return count;
// }

// const inputStr =
//   "This is a string";
// const result = countString(inputStr);
// console.log(result);

// Lesson - 3

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false,
//   },
//   {
//     title: "Dunyoning ishlari",
//     author: "O’tkir Hoshimov",
//     read: true,
//   },
//   {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true,
//   },
// ];

// books.forEach((book, index) => {
//   const status = book.read ? "o’qilgan" : "o’qilmagan";
//   console.log(
//     `${index + 1}. ${book.author} ning ${book.title} kitobi ${status}`
//   );
// });

// Lesson - 4

// function createObject(arr) {
//   return arr.reduce((obj, str) => {
//     obj[str] = str.length;
//     return obj;
//   }, {});
// }

// const stringsArray = ["text", "world", "laptop"];
// const result = createObject(stringsArray);
// console.log(result);

// Lesson - 5

// function countOccurrences(arr) {
//   return arr.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});
// }

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const result = countOccurrences(animals);
// console.log(result);

// Lesson - 6

// function ageDifference(arr) {
//   arr.sort((a, b) => a.age - b.age);

//   const youngest = arr[0].age;
//   const oldest = arr[arr.length - 1].age;

//   return oldest - youngest;
// }

// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// const result = ageDifference(people);
// console.log(result);

// Lesson - 7

// function getTrFl(arr) {
//     const truthy = arr.filter(item => Boolean(item));
//     const falsy = arr.filter(item => !Boolean(item));
//     return { truthy, falsy };
// }

// const inputArray = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
// const result = getTrFl(inputArray);
// console.log(result);

// Lesson - 8

// function minMaxWord(sentence) {
//   const words = sentence.split(" ");

//   let minWord = words[0];
//   let maxWord = words[0];

//   words.forEach((word) => {
//     if (word.length < minWord.length) {
//       minWord = word;
//     }
//     if (word.length > maxWord.length) {
//       maxWord = word;
//     }
//   });

//   return { minWord, maxWord };
// }

// const sentence = "Men dasturlash kursida o’qiyman";
// const result = minMaxWord(sentence);
// console.log(result);

// Lesson - 9

// const str = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";

// const najot = str.slice(20, 25);
// const talim = str.slice(2, 9);
// const is = str.slice(33, 35);
// const the = str.slice(42, 45);
// const best = str.slice(53, 57);

// const result = `${najot.charAt(0).toUpperCase() + najot.slice(1).toLowerCase()} ${talim} ${is} ${the} ${best}`;
// console.log(result);

// Lesson - 10

// var searchMatrix = function (matrix, target) {
//   if (!matrix || matrix.length === 0) {
//     return false;
//   }

//   const rows = matrix.length;
//   const cols = matrix[0].length;

//   let row = 0;
//   let col = cols - 1;

//   while (row < rows && col >= 0) {
//     if (matrix[row][col] === target) {
//       return true;
//     } else if (matrix[row][col] < target) {
//       row++;
//     } else {
//       col--;
//     }
//   }
//   return false;
// };

// const matrix1 = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];

// console.log(searchMatrix(matrix1, 3));
// console.log(searchMatrix(matrix1, 13));

// Lesson - 11

// var rotateMatrix = function (matrix) {
//   if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
//     return matrix;
//   }

//   const n = matrix.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       const temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     matrix[i].reverse();
//   }

//   return matrix;
// };

// const matrix1 = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ];

// const rotatedMatrix1 = rotateMatrix(matrix1);
// console.log(rotatedMatrix1);

// const matrix2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const rotatedMatrix2 = rotateMatrix(matrix2);
// console.log(rotatedMatrix2);

// Lesson - 12

// function findLength(str) {
//     const words = str.trim().split(/\s+/);
//     const lastWord = words.pop();

//     return lastWord.length;
// }

// const text = "Sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping";

// const lengthOfLastWord = findLength(text);
// console.log(lengthOfLastWord);

// Lesson - 13

// function getObject(obj) {
//   return Object.entries(obj).map(([key, value]) => `${key}${value}`);
// }

// const obj = { a: 2, b: 5, c: 7 };

// const resultArray = getObject(obj);
// console.log(resultArray);

// Lesson - 14

// var findMedian = function (nums1, nums2) {
//   const mergedArray = [...nums1, ...nums2];

//   mergedArray.sort((a, b) => a - b);

//   const n = mergedArray.length;
//   if (n % 2 === 0) {
//     const mid1 = n / 2 - 1;
//     const mid2 = n / 2;
//     return (mergedArray[mid1] + mergedArray[mid2]) / 2;
//   } else {
//     const mid = Math.floor(n / 2);
//     return mergedArray[mid];
//   }
// };

// const nums1 = [1, 2];
// const nums2 = [3, 4];

// console.log(findMedian(nums1, nums2));

// Lesson - 15

// function moveDuplicates(arr) {
//   const seen = new Set();
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];

//     if (!seen.has(item)) {
//       seen.add(item);
//       result.push(item);
//     }
//   }

//   return result;
// }

// const array = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6];
// const result = moveDuplicates(array);
// console.log(result);

// Lesson - 16

// let products = [
//   { id: 6, name: "Smartphone", price: 12000, rating: 4.5, discount: 20 },
//   { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
//   { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//   { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
// ];

// products = products.filter((product) => product.id !== 4);

// console.log(products);

// Lesson - 17

// function findAge(people) {
//   const ages = people.map((person) => person.age);
//   const minAge = Math.min(...ages);
//   const maxAge = Math.max(...ages);
//   const ageDifference = maxAge - minAge;

//   return ageDifference;
// }

// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// const difference = findAge(people);
// console.log(difference);

//===================  Calculator  =========================

let currentDisplay = "0";

function updateDisplay() {
  document.getElementById("display").value = currentDisplay;
}

function appendNumber(number) {
  if (currentDisplay === "0") {
    currentDisplay = number;
  } else {
    currentDisplay += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (
    currentDisplay !== "0" &&
    !isNaN(currentDisplay[currentDisplay.length - 1])
  ) {
    currentDisplay += operator;
    updateDisplay();
  }
}

function appendDecimal() {
  if (!currentDisplay.includes(".")) {
    currentDisplay += ".";
    updateDisplay();
  }
}

function clearDisplay() {
  currentDisplay = "0";
  updateDisplay();
}

function calculate() {
  try {
    currentDisplay = eval(currentDisplay).toString();
    updateDisplay();
  } catch (error) {
    currentDisplay = "Error";
    updateDisplay();
  }
}

updateDisplay();
