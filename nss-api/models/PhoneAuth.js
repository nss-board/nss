import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";

export const PhoneAuth = sequelize.define("PhoneAuth", {
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expire: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});
