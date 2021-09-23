'use strict';

module.exports = {
    up: async (queryInterface,Sequelize) => {
        await queryInterface.createTable ('reviews', {
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
    },


    down : async (queryInterface,Sequelize) => {

    },
};