import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Role = sequelize.define("Role", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
// Role.sync({ force: true }).then(() => {
//   Role.create({ id: 1, name: "user" });
//   Role.create({ id: 2, name: "admin" });
// });
export default Role;
