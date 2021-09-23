const {Datatypes} = require ('sequeliza');


module.exports = (sequelize) => sequelize.define ('properties', {

    id:{ type: DataTypes.INTEGER, primaryKey: true, autoINcrement:true},
    name: DataTypes.STRING,
    description:DataTypes.TEXT,
    price:DataTypes.FLOAT,
    address:DataTypes.STRING,
    image: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt:DataTypes.DATE,
}) 
