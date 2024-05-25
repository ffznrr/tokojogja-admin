'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  barang.init({
    gambar_barang: DataTypes.STRING,
    nama_barang: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    harga: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'barangs',
  });
  return barang;
};