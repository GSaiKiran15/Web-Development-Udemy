import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
let newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
let boom = numbers.filter((num) => num < 10);
console.log(boom);

//Reduce - Accumulate a value by doing something to each item in an array.
let newNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumber);

////Find - find the first item that matches from an array.
newNumber = numbers.find((num) => num > 10);
console.log(newNumber);

////FindIndex - find the index of the first item that matches.
newNumber = numbers.findIndex((num) => num > 10);
console.log(newNumber);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
