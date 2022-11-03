const Sequelize = require("sequelize");
const connection = require("../database/database");
const Org = require("../org/Org");

const Player = connection.define('players',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    lane:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    available:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    price:{
        type:Sequelize.FLOAT,
        allowNull:false,
    },
    slug:{
        type: Sequelize.STRING,
        allowNull:false
    },
    pic:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Org.hasMany(Player);
Player.belongsTo(Org);

Player.sync({force:true});

module.exports = Player;
