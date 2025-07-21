import sequelize from "./db.js";
import Sequelize from "sequelize";

import User from "./user.models.js";
import Role from "./role.models.js";

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Role = Role;

//Associations
db.User.belongsToMany(db.Role, {
  through: "uesr_roles",
});

db.Role.belongsToMany(db.User, {
  through: "uesr_roles",
});
export default db;
