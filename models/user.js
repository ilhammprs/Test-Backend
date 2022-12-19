'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.jadwal, {
        as: "jadwal",
        foreignKey: {
          name: "idDeller",
        },
      });

      // static associate(models) {
      //   // define association here
      //   user.hasMany(models.status, {
      //     as: "status",
      //     foreignKey: {
      //       name: "idDeller",
      //     },
      //   });

    }
  }
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};