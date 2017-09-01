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
    questions.belongsTo(models.user, {
      foreignKey: 'questions',
      onDelete: 'CASCADE',
    });
  };

  return questions;
};
