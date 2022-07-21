"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
/**
 * @description @config - 개발 데이터베이스 환경 세팅
 * @case : 개체 하나의 모듈을 내보내는 방법
 * 이때 import를 할때는 {}중괄호를 생략하고 가져올 수 있음
 */
const config = {
    development: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWD || 'password',
        database: process.env.DB_DBNAME || 'test',
        host: process.env.DB_HOST || 'localhost',
        dialect: "mysql"
    }
};
exports.default = config;
/**
 * @otherCase : 복수의 함수형태가 있는 라이브러리 형태의 모듈을 내보내는 방법
 * 이때 import를 할때는 {}중괄호를 사용해서 가져와야 함
  export const config2 = {
  development : {
      username : process.env.DB_USERNAME || 'root',
      password : process.env.DB_PASSWD || 'password',
      database : process.env.DB_DBNAME || 'test',
      host : process.env.DB_HOST || 'localhost',
      dialect : "mysql"
  }
};
 */ 
