const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
// customize version
yargs.version("1.1.0");
// for note we need 5 command add,remove,list,read,edit
// Add commnd
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// remove command
yargs.command({
  command: "remove",
  describe: "remove a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
// list Command
yargs.command({
  command: "list",
  describe: "list notes ...",
  handler() {
    notes.listNote();
  },
});
// read command

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});
// edit command
yargs.command({
  command: "edit",
  describe: " edit existing note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.editNote(argv.title, argv.body);
  },
});
yargs.parse();
