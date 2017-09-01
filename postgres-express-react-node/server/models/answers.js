'use strict';
module.exports = function(sequelize, DataTypes) {
  var answers = sequelize.define('answers', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return answers;
};