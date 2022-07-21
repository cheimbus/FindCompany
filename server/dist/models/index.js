"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
/**
 * @description timezone - MySQL 내부의 default 시간 UTC를 한국 시간으로 바꿔주기 위해 9시간을 더해주었다
 */
const sequelzie = new sequelize_1.Sequelize(config_1.default.development.database, config_1.default.development.username, config_1.default.development.password, {
    host: config_1.default.development.host,
    dialect: "mysql",
    timezone: '+09:00'
});
exports.default = sequelzie;
