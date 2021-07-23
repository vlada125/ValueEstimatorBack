'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "company",
        as: "users",
      });
    }
  };
  Question.init({
    name: DataTypes.STRING,
    next: DataTypes.STRING,
    end: DataTypes.BOOLEAN,
    node: DataTypes.INTEGER,
    question: DataTypes.STRING,
    title: DataTypes.STRING,
    subHeading: DataTypes.STRING,
    status: DataTypes.STRING,
    answers: {
      type: DataTypes.STRING(10000000),
       get: function() {
          return JSON.parse(this.getDataValue('answers'));
      }, 
      set: function(val) {
          return this.setDataValue('answers', JSON.stringify(val));
      }
    },
    company: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};