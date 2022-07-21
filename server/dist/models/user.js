"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
class Users extends sequelize_1.Model {
}
exports.Users = Users;
Users.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: "cascade"
    },
    name: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    }
}, {
    modelName: 'Users',
    tableName: 'users',
    sequelize: index_1.default,
    freezeTableName: true,
});
