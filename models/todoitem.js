"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      todoItem.belongsTo(models.todolist, { foreignKey: "todoListId" });
    }
  }
  todoItem.init(
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "todoItem",
    }
  );
  return todoItem;
};
