console.log("Log something to check its working");

// For loops
for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

// While loops

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

let keepLooping = true;
let i = 0;
while (keepLooping === true) {
  console.log("Iteration", i);
  // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
  keepLooping = Math.random() < 0.1;
  i++;
}

//Looping over array

const foods = ["pizza", "chocolate", "ice cream", "cheese"];

for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

//Alternative syntax for looping over arrays

for (let food of foods) {
  console.log(food);
}

foods.forEach(function (food) {
  console.log(food);
});

// The forEach array method also passes the array index to the anonymous function, so you can use it if you need to.

foods.forEach(function (food, index) {
  console.log(index, food);
});

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}

//For each loop

//const foods = ["pizza", "chocolate", "ice cream", "cheese"];

// FavouriteNumbers Array and push command

// const favouriteNumbers = [13, 28, 6, 7, Infinity];
// console.log(favouriteNumbers);
// favouriteNumbers.push(1972);
// console.log(favouriteNumbers);
// favouriteNumbers.push(1980);
// console.log(favouriteNumbers);

// // For loops
// for (let i = 0; i < 5; i++) {
//   console.log("Iteration", i);
// }

// // While loops
// let counter = 1;
// while (counter <= 5) {
//   console.log(counter);
//   counter++;
// }

// //While with random number until number < 0.1

// let keepLooping = true;
// let i = 0;
// while (keepLooping === true) {
//   console.log("Iteration", i);
//   // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
//   keepLooping = Math.random() < 0.2;
//   i++;
// }

// //Looping over Arrays

// const foods = ["pizza", "chocolate", "ice cream", "cheese"];
// for (let i = 0; i < foods.length; i++) {
//   console.log("Loop using .length" + foods[i]);
// }
// // Alternative method of looping
// for (let food of foods) {
//   console.log("Loop without using .length, tidier. " + food);
// }

// for (let number of favouriteNumbers) {
//   console.log(number);
// }

// //Looping over Arrays forEach method

// foods.forEach(function (food) {
//   console.log("forEach loop: " + food);
// });

// //Workshop Activities

// const favouriteAnimals = ["dog", "cat", "fish", "birds", "elephants"];
// //Method 1 forEach
// favouriteAnimals.forEach(function (animal) {
//   console.log("forEach:" + animal);
// });
// //Method 2 for
// for (let animal of favouriteAnimals) {
//   console.log("for with let " + animal);
// }

// const imagesArray = [
//   `https://images.pexels.com/photos/110820/pexels-photo-110820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
//   `https://images.pexels.com/photos/63285/pig-alp-rona-furna-sow-63285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
//   `https://images.pexels.com/photos/66258/staniel-cay-swimming-pig-seagull-fish-66258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
//   `https://previews.123rf.com/images/alexraths/alexraths1312/alexraths131200033/24529413-pig-on-hay-and-straw-green-shamrock-in-snout.jpg`,
// ];

// function displayImages(arr) {
//   for (let i = 0; i < imagesArray.length; i++) {
//     let img = document.createElement("img");
//     img.src = arr[i];
//     img.width = "500";
//     img.height = "500";
//     document.body.appendChild(img);
//   }
// }

// displayImages(imagesArray);
