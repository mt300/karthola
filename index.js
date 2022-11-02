const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const connection = require("./database/database");

const marketControler = require("./market/MarketControler");
const playersControler = require("./player/PlayersControler");
const orgsControler = require("./org/OrgsControler");

const Player = require("./player/Player");
const Org = require("./org/Org");

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


// Routers
app.use("/", marketControler);
app.use("/", playersControler);
app.use("/", orgsControler);

//Routes
app.get('/', (req, res) => {
    res.render('index');
});


//Listen
app.listen(port, () => console.log(`Karthola listening on port ${port}!`))