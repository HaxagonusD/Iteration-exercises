//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings

const stringMaker = (array) => array.map((currentValue) => `${currentValue}`);

//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled

const doubleTrouble = (array) => {
  let toReturn = [];
  array.forEach((currentValue) => {
    toReturn.push(currentValue * 2);
  });
  return toReturn;
};

//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here

const firstAndLast = (array) =>
  array.map(
    (currentValue) =>
      `${currentValue[0]}${currentValue[currentValue.length - 1]}`
  );

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4

//the loop logs 1 three times  -----------1
//then 2 three times ---------------------2
//then 3 three times  --------------------3
//then 4 three times ---------------------4

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + 1);
  }
}
