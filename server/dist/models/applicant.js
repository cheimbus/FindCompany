"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applicant = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
const post_1 = require("./post");
const index_1 = require("./index");
class Applicant extends sequelize_1.Model {
}
exports.Applicant = Applicant;
Applicant.init({
    id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: "cascade"
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    employer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    is_apply: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    modelName: 'Applicant',
    tableName: 'applicant',
    sequelize: index_1.default,
    freezeTableName: true,
    underscored: true,
});
user_1.Users.hasMany(Applicant, {
    sourceKey: 'id',
    foreignKey: { name: "userId", allowNull: true },
    onDelete: "CASCADE",
    hooks: true
});
Applicant.belongsTo(user_1.Users, {
    foreignKey: { name: "userId", allowNull: true },
    onDelete: "CASCADE",
});
post_1.Posts.hasMany(Applicant, {
    sourceKey: 'id',
    foreignKey: { name: "post_id", allowNull: true },
    onDelete: "CASCADE",
    hooks: true
});
Applicant.belongsTo(post_1.Posts, {
    foreignKey: { name: "post_id", allowNull: true },
    onDelete: "CASCADE",
});
