'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

   
        await queryInterface.createTable ('users', {
            id:{ type: DataTypes.INTEGER, primaryKey: true, autoINcrement:true},
            image: DataTypes.STRING,
            name: DataTypes.STRING,
            email:DataTypes.STRING,
            phone:DataTypes.NUMBER,
            createdAt: DataTypes.DATE,
            updatedAt:DataTypes.DATE,
        })
    },


    down: async (queryInterface,Sequelize) => {

    },
};

