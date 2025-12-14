const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog_api", "root", "navyavarshini@17", {
  host: "127.0.0.1",
  dialect: "mysql",
});

module.exports = sequelize;
