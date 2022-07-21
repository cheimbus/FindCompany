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
exports.deleteCompany = void 0;
const post_1 = require("../../models/post");
/**
 * @description @deleteCompany - 해당 공고문을 삭제한다.
 */
const deleteCompany = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyId = req.params.id;
        if (!companyId) {
            return res.status(400).json({ message: "해당하는 id값이 없습니다." });
        }
        else {
            const isDelete = yield post_1.Posts.findOne({ where: { id: companyId } });
            if (!isDelete) {
                return res.status(400).json({ message: "이미 삭제되었습니다." });
            }
            else {
                yield post_1.Posts.destroy({ where: { id: companyId } });
                return res.status(200).json({ message: "모집공고가 삭제되었습니다." });
            }
        }
    }
    catch (err) {
        console.log("잘못된 접근입니다.", err);
        res.status(404).json({ message: "잘못된 접근입니다.", err });
    }
});
exports.deleteCompany = deleteCompany;
