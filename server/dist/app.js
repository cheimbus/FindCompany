"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const index_1 = require("./router/index");
const createTableAll_1 = require("./migrations/createTableAll");
dotenv.config();
const app = express();
/**
 * @function migrationAllTable - migrations -> tables안에 있는 파일들을 전부 훑어서 모델 매핑
 */
(0, createTableAll_1.default)();
/**
 * @description - 미들웨어
 */
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTION", "PUT", "DELETE", "PATCH"]
}));
app.use(express.json());
/**
 * @description - 라우터
 */
app.use("/", index_1.default);
/**
 * @description - 서버
 */
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(`🐥서버가 ${app.get("port")}로 열렸습니다!`);
});
app.listen(3000);
