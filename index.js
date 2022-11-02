const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const connection = require("./database/database");

app.set("view engine","ejs");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Database

connection
    .authenticate()
    .then( () => {
        console.log("Connected to Database");
    }).catch((error) => {
        console.log(error);
    })

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`Karthola listening on port ${port}!`))