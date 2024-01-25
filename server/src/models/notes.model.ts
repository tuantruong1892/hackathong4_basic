import sequelize from "../configs/db.config";
import { DataTypes } from "sequelize";

const Notes = sequelize.define(
  "Notes",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
export default Notes;
