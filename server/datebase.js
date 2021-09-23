const { Sequelize} = require ('sequelize');

// Importar modelos

const Property = require ('./models/Property');
const Review = require ('./models/Review');
const User = require ('./models/User');
const Payment = require ('./models/Payment');


// Datebase connection 

const sequelize = new Sequelize ('DEPGO-api', 'root' , 'root', {

host: 'localhost',
dialect: 'mariadb',
logging: false,
});

// Getting models

const models = [
    Property,
    Review,
    User,
    Payment,
];

// Registering models into SEquelize

for (let model of models){
    model(sequelize)
}

// Configurar relaciones 

const { properties,reviews,users,psyments } = sequelize.models;
reviews.belongsTo('properties');
reviews.belongsTo('users');
payments.belongsTo('properties');


module.exports = sequelize;


