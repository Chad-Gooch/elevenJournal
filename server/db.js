const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:535f1157f7bf4aaa828d6099e6893819@localhost:5432/eleven-journal');

module.exports = sequelize;