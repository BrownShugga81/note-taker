const express = require("express");
const fs  = require("fs");
//const fs = require("fs");
//const db = require("./develop/db/db.json");
const path = require('path');
//const router = express.Router();

const db = require('./develop/db/db.json');
const app = express();
const PORT = process.env.PORT || 3001;

const notes = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("develop/public"));


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
app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    
    fs.writeFileSync('./develop/db/db.json', JSON.stringify(newNote), function(err) {
            if (err) throw err;
        });

    res.json(newNote);    
});
    

app.listen(PORT, function() {
    console.log("listening to PORT " + PORT);
});