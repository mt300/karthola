const express = require('express');
const router = express.Router();
const slugify = require("slugify");

const Org = require("./Org");

//ADMIN Routers
router.get('/admin/orgs/new', (req, res) => {
    res.render('./admin/orgs/new');    
});

router.post('/orgs/save', (req, res) => {
    var name = req.body.name;
    if(name != undefined){
        Org.create({
            name:name,
            slug: slugify(name)
        }).then(() => {
            res.redirect("/admin/market");
        });
    }else{
        res.redirect("/admin/orgs/new");
    }
});

module.exports = router;