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
exports.getAllCompany = void 0;
const post_1 = require("../../models/post");
/**
 * @description @getAllCompany - 모집 공고문 전체를 리턴합니다.
 */
const getAllCompany = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield post_1.Posts.findAll({ raw: true });
        for (let i = 0; i < result.length; i++) {
            delete result[i].detail;
        }
        if (!result) {
            res.status(200).json({ message: "목록이 존재하지 않습니다." });
        }
        else {
            res.status(200).json({ message: "ok", result });
        }
    }
    catch (err) {
        console.log("잘못된 접근입니다.", err);
        res.status(404).json({ message: "잘못된 접근입니다.", err });
    }
});
exports.getAllCompany = getAllCompany;
