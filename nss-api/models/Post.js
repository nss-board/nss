import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.js";

export const Post = sequelize.define("Post", {
  writer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // createdAt: {
  //   type: DataTypes.STRING,
  //   unique: true,
  //   allowNull: false,
  // },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thumbnail: {
    type: DataTypes.TEXT("long"),
    allowNull: true,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comments: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});
