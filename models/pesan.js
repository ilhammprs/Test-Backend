'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pesan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pesan.belongsTo(models.jadwal, {
        as: "jadwal",
        foreignKey: {
          name: "idJadwal",
        },
      });   

    }
  }
  pesan.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    tipe_mobil: DataTypes.STRING,
    no_plat: DataTypes.STRING,
    kerusakan: DataTypes.TEXT,
    idJadwal: DataTypes.INTEGER,
    waktu_pesan: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'pesan',
  });
  return pesan;
};