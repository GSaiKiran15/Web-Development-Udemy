// CHALLENGE: uncomment the code below and see the car stats rendered

// import animals from "./data";

// const animals = [
//     { name: "cat", sound: "meow" },
//     { name: "dog", sound: "woof" }
//   ];

// let [cat, dog] = animals

// let {name: CatName, sound: CatSound = "Boom"} = cat
 
// console.log(CatName, CatSound);

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars
const hondaTopSpeed = honda.speedStats.topSpeed

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
