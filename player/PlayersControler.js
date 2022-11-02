const express = require('express');
const router = express.Router();
const slugify = require("slugify");
const Org = require("../org/Org");
const Player = require('./Player');

// ADMIN routers
router.get('/admin/player/new', (req,res) => {
    Org.findAll().then((orgs) => {
        res.render('./admin/player/new',{orgs:orgs});
    })
});

router.post('/player/save', (req,res) => {
    var name = req.body.name;
    var lane = req.body.lane;
    var org = req.body.org;
    var available = req.body.available?true:false;
    if(name != undefined){
        Player.create({
            name:name,
            lane:lane,
            available:available,
            price: 0.0,
            slug:slugify(name),
            orgId: org
        }).then(() => {
            res.redirect("/admin/player/new");
        }).catch((error) => {
            console.log(error);
            res.send("erro");
        })
    }else{
        res.redirect("/admin/player/new");
    }
    


})

module.exports = router;