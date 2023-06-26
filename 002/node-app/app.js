const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes");

console.log(chalk.green("Success!"));
console.log(chalk.bgGreen("Success!"));
console.log(chalk.bgBlue("Success!"));

// console.log(validator.isEmail("xxxx@gmail.com"));
// console.log(validator.isEmail("xxxx@gmail"));
// console.log(validator.isURL("https://thohh;skhfklshg"));
// console.log(validator.isURL("https://www.youtube.com/"));

// const getNotes = require("./notes");
// console.log(getNotes());

// // const fs = require("fs");

// // fs.writeFileSync("notes.txt", "my name is Rachel.");
// // fs.appendFileSync("notes.txt", " text to append");

// const add = require("./utils");

// // const name = "Rachel";

// console.log(add(1, 3));
