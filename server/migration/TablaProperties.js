'use strict';

module.exports = {
    up: async (queryInterface,Sequelize) => {
        await queryInterface.createTable ('properties', {
            id:{ type: DataTypes.INTEGER, primaryKey: true, autoINcrement:true},
            name: DataTypes.STRING,
            description:DataTypes.TEXT,
            price:DataTypes.FLOAT,
            address:DataTypes.STRING,
            image: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt:DataTypes.DATE,
        })     

    },


    down : async (queryInterface,Sequelize) => {

    },
};