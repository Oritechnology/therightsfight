'use strict';

module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  questions.associate = (models) => {
    questions.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    questions.hasMany(models.answers, {
      as: 'answers',
    });
  };

  return questions;
};
