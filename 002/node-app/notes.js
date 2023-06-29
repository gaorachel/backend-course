const { default: chalk } = require("chalk");
const fs = require("fs");

const getNotes = () => {
  //   return console.log("Your notes.....");
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added!"));
  } else {
    console.log(chalk.bgYellow("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const restNotes = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(restNotes);
  console.log(chalk.bgGreen(`${title} has been removed.`));
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgWhite("Your notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.bgCyan(note.title), note.body);
  } else {
    console.log("Cannot found");
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}; // the way to export multiple functions
