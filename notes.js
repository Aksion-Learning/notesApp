const fs = require("fs");
const chalk = require("chalk");
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log(notes);
    console.log(chalk.green.inverse("New Note Added"));
  } else {
    console.log(chalk.red.inverse("Note Title taken!"));
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const newNote = notes.filter((note) => note.title !== title);
  if (notes.length > newNote.length) {
    console.log(chalk.green.inverse("Note Removed "));
    saveNote(newNote);
  } else {
    console.log(chalk.red.inverse(" No Note Found "));
  }
};
const listNote = () => {
  try {
    const notes = loadNotes();
    console.log(chalk.blue.inverse("Your Notes :"));
    notes.forEach((element) => {
      console.log(chalk.red.bold(element.title));
      console.log(chalk.green.bold(element.body));
    });
  } catch (err) {
    console.log(chalk.red.inverse("there is no note to display"));
  }
};
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};
const editNote = (title, body) => {
  const notes = loadNotes();

  notes.forEach((element, index) => {
    if (element.title === title) {
      notes[index].body = body;
      console.log(
        chalk.cyanBright.bold("Your Note with title : ") +
          chalk.dim.bold(title) +
          chalk.cyanBright.bold(" has been update sucessfully")
      );
    }
  });
  saveNote(notes);
};
const saveNote = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};
const loadNotes = () => {
  try {
    const readBuffer = fs.readFileSync("notes.json");
    const dataJson = readBuffer.toString();
    return JSON.parse(dataJson);
  } catch (err) {
    return []
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
  editNote: editNote,
};
