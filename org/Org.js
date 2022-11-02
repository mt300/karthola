const Sequelize = require("sequelize");
const connection = require("../database/database");


const Org = connection.define('orgs',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});

// Org.sync({force:true});

module.exports = Org;
