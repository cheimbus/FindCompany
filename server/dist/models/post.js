"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
/**
 * @description @detail - ?은 공고문에서 가져올 값들은 기본으로 detail을 제외시키고 가져오기 때문에
 * detail값을 없애고 보여줘야해서 와일드카드 ? 을 사용
 */
class Posts extends sequelize_1.Model {
}
exports.Posts = Posts;
Posts.init({
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
    },
    country: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    position: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    tech: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    message: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    detail: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    }
}, {
    modelName: 'Posts',
    tableName: 'posts',
    sequelize: index_1.default,
    freezeTableName: true,
});
