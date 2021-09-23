const {DataTypes,Sequeliza} = require (sequelize);

module.exports = (sequelize) => sequelize.define ('reviews',{
    id:{ type: DataTypes.INTEGER, primaryKey: true, autoINcrement:true},
    name: DataTypes.STRING,
    content:DataTypes.TEXT,
    propertyId: {
        type:Sequelize.INREGER,
        references: { 
             model: 'properties', 
             key: 'id',
    },

    onDelate: 'CASCADE',

 },
 createAt: Datatypes.DATE,
 updateAt: DataTypes.DATE,

});