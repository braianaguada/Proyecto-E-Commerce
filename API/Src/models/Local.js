const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Local = sequelize.define(
  "locals",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  Local,
};
