'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customui extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "user",
        as: "users",
      });
    }
  };
  Customui.init({
    backgroundImg: DataTypes.STRING,
    normalFont: DataTypes.STRING,
    labelFont: DataTypes.STRING,
    labelCol: DataTypes.STRING,
    cardBackCol: DataTypes.STRING,
    headerCol: DataTypes.STRING,
    headerText: DataTypes.STRING,
    user: DataTypes.INTEGER,
    popupText: DataTypes.STRING,
    popupCol: DataTypes.STRING,
    skipButton: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Customui',
  });
  return Customui;
};