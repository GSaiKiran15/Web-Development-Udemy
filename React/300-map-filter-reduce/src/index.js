var numbers = [3, 56, 2, 48, 5];
var x = [];
//Map -Create a new array by doing something with each item in an array.
const map1 = numbers.map((x) => x ** 2);
console.log(map1);

//Filter - Create a new array by keeping the items that return true.
const result = numbers.filter((x) => x % 2 === 0);
console.log(result);

//Reduce - Accumulate a value by doing something to each item in an array.
let initialValue = 0;
const reduced = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(reduced);

//Find - find the first item that matches from an array.
const finder = numbers.find((x) => x % 2 !== 0);
console.log(finder);

//FindIndex - find the index of the first item that matches.
const index = numbers.findIndex((x) => x === 5);
console.log(index);
  
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.",
  },
];

const emojis = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(1, 101);
});
console.log(emojis);
