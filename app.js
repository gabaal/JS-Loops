console.log("Log something to check its working");

// FavouriteNumbers Array and push command

const favouriteNumbers = [13, 28, 6, 7, Infinity];
console.log(favouriteNumbers);
favouriteNumbers.push(1972);
console.log(favouriteNumbers);
favouriteNumbers.push(1980);
console.log(favouriteNumbers);

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

//While with random number until number < 0.1

let keepLooping = true;
let i = 0;
while (keepLooping === true) {
  console.log("Iteration", i);
  // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
  keepLooping = Math.random() < 0.2;
  i++;
}

//Looping over Arrays

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let i = 0; i < foods.length; i++) {
  console.log("Loop using .length" + foods[i]);
}
// Alternative method of looping
for (let food of foods) {
  console.log("Loop without using .length, tidier. " + food);
}

for (let number of favouriteNumbers) {
  console.log(number);
}

//Looping over Arrays forEach method

foods.forEach(function (food) {
  console.log("forEach loop: " + food);
});

//Workshop Activities

const favouriteAnimals = ["dog", "cat", "fish", "birds", "elephants"];
//Method 1 forEach
favouriteAnimals.forEach(function (animal) {
  console.log("forEach:" + animal);
});
//Method 2 for
for (let animal of favouriteAnimals) {
  console.log("for with let " + animal);
}
