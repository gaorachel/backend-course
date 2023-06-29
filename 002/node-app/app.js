// const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const { getNotes, addNote, removeNote, listNotes, readNote } = require("./notes");

// const command = process.argv[2];

// customaise yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, // default is false
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true, // default is false
      type: "string",
    },
  },
  handler: (argv) => {
    addNote(argv.title, argv.body);
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
  },
});

// create remove command

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list a note",
  handler: (argv) => {
    listNotes(argv);
  },
});

yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    readNote(argv.title);
  },
});

yargs.parse();

// console.log(yargs.argv);
// console.log(process.argv);

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }
// console.log(chalk.green("Success!"));
// console.log(chalk.bgGreen("Success!"));
// console.log(chalk.bgBlue("Success!"));

// console.log(process.argv);

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
