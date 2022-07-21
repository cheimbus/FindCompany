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
exports.companyDetail = void 0;
const post_1 = require("../../models/post");
/**
 * @description @companyDetail - 일반 공고문에는 보이지 않는 detail을 리턴한다.
 */
const companyDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyId = req.params.id;
        if (companyId) {
            const data = yield post_1.Posts.findOne({ where: { id: companyId } });
            if (!data) {
                return res.status(400).json({ message: "존재하지 않은 공고문입니다." });
            }
            return res.status(200).json({ message: "ok", data });
        }
    }
    catch (err) {
        console.log("잘못된 접근입니다.", err);
        res.status(404).json({ message: "잘못된 접근입니다.", err });
    }
});
exports.companyDetail = companyDetail;
