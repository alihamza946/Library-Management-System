const sequelize = require("./dbConnection");
const admin = require("./tables/admin");
const users = require("./tables/user");

const models = { users, admin };

sequelize.models = models;

module.exports = { sequelize, models };
