const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce_database', 'postgres', '00000000', {
    host: 'ecommercedb.ct1pqe6pud5y.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
  });

module.exports = sequelize