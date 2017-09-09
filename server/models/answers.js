'use strict';
module.exports = function(sequelize, DataTypes) {
  var answers = sequelize.define('answers', {
    text: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: function(models) {
        answers.belongsTo(models.user, {
          foreignKey: 'user_id',
        });
      }
    }
  });
  return answers;
};
