module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    firstName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    lastName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    userName: {
      type: DataTypes.STRING
    },

    about: {
      type: DataTypes.CHAR(65),
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM('active',  'inactive'),
      defaultValue: 'active'
    },

      title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });


return User;

  User.associate = (models) => {
    User.hasMany(models.questions, {
      foreignKey: 'userId',
      as: 'questions',
    });
  };

  return User;
};
