const express = require('express');
const router = express.Router();
const slugify = require("slugify");
const Player = require("../player/Player");
const Org = require("../org/Org");


// USERS routers
router.get('/market', (req, res) => {
    Player.findAll({
        include: [{model:Org}]
    }).then((players) => {
        res.render("market", {players:players});
    });
});


// ADMIN routers
router.get('/admin/market', (req,res) => {
    res.render('./admin/market/index');
});


module.exports = router;