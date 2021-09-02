const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    // columns will go here
    id: {
        // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
      },
      // define a COMMNET BOX column
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // define an USER ID column
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;