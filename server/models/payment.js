const {DataTypes,Sequeliza} = require (sequelize);

module.exports = (sequelize) => sequelize.define ('rpayment',{
    id:{ type: DataTypes.INTEGER, primaryKey: true, autoINcrement:true},
    propertyId: {
        type:Sequelize.INREGER,
        references: { 
             model: 'properties', 
             key: 'id',
    },

    onDelate: 'CASCADE',

},

    userId: {
        type:Sequelize.INREGER,
        references: { 
             model: 'users', 
             key: 'id'

    },

    onDelate: 'CASCADE',

},
    

    name: DataTypes.STRING,
    cardType: DataTypes.NUMBER,
    expirationDateday: DataTypes.NUMBER,
    expirationDatemonth: DataTypes.NUMBER,

    onDelate: 'CASCADE',

 createAt: DataTypes.DATE,
 updateAt: DataTypes.DATE

});



