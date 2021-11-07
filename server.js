const express = require("express");
const fs = require("fs");
const db = require("./develop/db/db.json");


const app = express();
const PORT = process.env.PORT || 3001;

require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));










app.listen(PORT, function() {
    console.log("listening to PORT " + PORT);
});