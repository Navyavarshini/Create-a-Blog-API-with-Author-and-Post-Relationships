const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Author = require("./author");

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Relate post to author (one-to-many)
Post.belongsTo(Author, {
  foreignKey: "author_id",
  onDelete: "CASCADE"
});

module.exports = Post;
