
module.exports = (sequelize) => sequelize.define ('users', {

    id:{ type: DataTypes.INTEGER, primaryKey: true, autoINcrement:true},
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    phone:DataTypes.NUMBER,
    createdAt: DataTypes.DATE,
    updatedAt:DataTypes.DATE,
}) 

