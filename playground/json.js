//var personString = '{"name":"Isaac", "age":23}';
//var person = JSON.parse(personString);

//console.log(typeof person);
//console.log(person);

const fs = require('fs');
var originalNote = {
	title: 'Some title',
	body: 'Some body'
};

// originalNoteString
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(originalNoteString);

console.log(typeof note);
console.log(note.title);