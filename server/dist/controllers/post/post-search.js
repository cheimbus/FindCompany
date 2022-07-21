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
exports.companySearch = void 0;
const post_1 = require("../../models/post");
/**
 * @description @companySearch - 쿼리를 받아서 name, country, position, tech로 검색하여
 * 해당하는 공고문을 리턴합니다.
 */
const companySearch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.name;
        if (query) {
            const data = yield post_1.Posts.findOne({
                raw: true, where: { name: query }
            });
            const isName = yield post_1.Posts.findAll({ raw: true });
            let exist = false;
            for (let i = 0; i < isName.length; i++) {
                if (isName[i].name === query) {
                    exist = true;
                }
            }
            if (!exist) {
                return res.status(400).json({ message: "삭제되었거나 생성되지 않은 공고문입니다." });
            }
            data === null || data === void 0 ? true : delete data.detail;
            return res.status(200).json({ message: "ok", data });
        }
    }
    catch (err) {
        console.log(err);
        throw (err);
    }
    try {
        const query = req.query.country;
        if (query) {
            const data = yield post_1.Posts.findAll({
                raw: true, where: { country: query }
            });
            let exist = false;
            if (data) {
                exist = true;
            }
            if (!exist) {
                return res.status(400).json({ message: "삭제되었거나 생성되지 않은 공고문입니다." });
            }
            for (let i = 0; i < data.length; i++) {
                delete data[i].detail;
            }
            return res.status(200).json({ message: "ok", data });
        }
    }
    catch (err) {
        console.log(err);
        throw (err);
    }
    try {
        const query = req.query.position;
        if (query) {
            const data = yield post_1.Posts.findAll({
                raw: true, where: { position: query }
            });
            let exist = false;
            if (data) {
                exist = true;
            }
            if (!exist) {
                return res.status(400).json({ message: "삭제되었거나 생성되지 않은 공고문입니다." });
            }
            for (let i = 0; i < data.length; i++) {
                delete data[i].detail;
            }
            return res.status(200).json({ message: "ok", data });
        }
    }
    catch (err) {
        console.log(err);
        throw (err);
    }
    try {
        const query = req.query.tech;
        if (query) {
            const data = yield post_1.Posts.findAll({
                raw: true, where: { tech: query }
            });
            let exist = false;
            if (data) {
                exist = true;
            }
            if (!exist) {
                return res.status(400).json({ message: "삭제되었거나 생성되지 않은 공고문입니다." });
            }
            for (let i = 0; i < data.length; i++) {
                delete data[i].detail;
            }
            return res.status(200).json({ message: "ok", data });
        }
    }
    catch (err) {
        console.log(err);
        throw (err);
    }
    try {
        res.status(404).json({ message: "잘못된 URL입니다." });
    }
    catch (err) {
        console.log("잘못된 접근입니다.", err);
        res.status(404).json({ message: "잘못된 접근입니다.", err });
    }
});
exports.companySearch = companySearch;
