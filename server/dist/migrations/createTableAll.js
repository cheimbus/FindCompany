"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//? 모든 마이그레이션 파일을 한꺼번에 마이그레이트 해주는 명령어를 만드는 모듈
/**
 * @description @exec - 새로운 프로세스를 생성하여 실행하는 node.js 내장 모듈
 */
const fs = require("fs");
const path = require("path");
const child_process_1 = require("child_process"); //? 새로운 프로세스를 생성하여 실행하는 node.js 내장 모듈
const util = require("util"); //? 내장 모듈
/**
 * @description @asyncExec - child_process 모듈의 exec을 이용해 반복문으로 프로세스를 생성할 때
 * 동기로 파일을 순서대로 실행시켜야 하기 때문에 비동기를 동기로 바꿈
 */
const asyncExec = util.promisify(child_process_1.exec);
console.log(`
  --------------------------------------
          🐝 마이그레이션 start! 🐝
  --------------------------------------
`);
/**
 * @description @migrationAllTable - 파일을 전부 읽고 ts-node 모듈로 마이그레이션 실행
 */
let migrationAllTable = () => __awaiter(void 0, void 0, void 0, function* () {
    let migrationFiles = [];
    fs.readdir(path.join(__dirname, "/tables"), (err, files) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            console.log("err : ", err);
        if (files) {
            files.forEach(el => {
                migrationFiles.push(el);
            });
            for (let el of migrationFiles) {
                console.log("Migration File Name : ", el);
                const { stdout, stderr } = yield asyncExec(`./node_modules/.bin/ts-node "${__dirname}/tables/${el}"`);
                if (stdout)
                    console.log(stdout);
                if (stderr)
                    console.error("Std Err : ", stderr);
            }
        }
    }));
});
exports.default = migrationAllTable;
