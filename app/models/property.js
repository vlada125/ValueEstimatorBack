'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Property.init({
    buildingType: DataTypes.STRING,
    city: DataTypes.STRING,
    cityPart: DataTypes.STRING,
    zip: DataTypes.STRING,
    street: DataTypes.STRING,
    sqm: DataTypes.FLOAT,
    builtYear: DataTypes.INTEGER,
    roomNumber: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    sqmPrice: DataTypes.FLOAT,
    condition: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    plot: DataTypes.STRING,
    transactionTime: DataTypes.FLOAT,
    consideration: DataTypes.STRING
  }, {
    sequelize,  
    modelName: 'Property',
  });
  return Property;
};