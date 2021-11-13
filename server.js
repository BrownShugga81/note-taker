const express = require("express");
const { fstat } = require("fs");
//const fs = require("fs");
//const db = require("./develop/db/db.json");
const path = require('path');
//const router = express.Router();

const db = require('./develop/db/db.json');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/develop/public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    res.json(db)
})
// home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/develop/public/index.html'))
    
})

// post new note
app.post("/api/notes", function(req, res) {
    const newNote = req.body;
    for (var i=0; i < notes.length; i++);
    
    notes.push(newNote);
     
    
    fs.writeFileSync('./develop/db/db.json', JSON.stringify(newNote), function(err) {
        if (err) throw err;
    });
});









app.listen(PORT, function() {
    console.log("listening to PORT " + PORT);
});