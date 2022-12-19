'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      jadwal.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "idDeller",
        },
      });

      jadwal.hasMany(models.pesan, {
        as: "pesan",
        foreignKey: {
          name: "idJadwal",
        },
      });
    }
  }
  jadwal.init({
    jadwal: DataTypes.DATE,
    quota: DataTypes.INTEGER,
    idDeller: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'jadwal',
  });
  return jadwal;
};