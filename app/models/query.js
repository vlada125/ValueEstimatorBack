'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Query extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "toCompany",
        as: 'userId',
      });
    }
  };
  Query.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    builtYear: DataTypes.INTEGER,
    buildingType: DataTypes.STRING,
    valuation: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    street: DataTypes.STRING,
    zip: DataTypes.STRING,
    city: DataTypes.STRING,
    roomNumber: DataTypes.INTEGER,
    plot: DataTypes.STRING,
    condition: DataTypes.STRING,
    sqm: DataTypes.FLOAT,
    status: DataTypes.STRING,
    toCompany: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Query',
  });
  return Query;
};