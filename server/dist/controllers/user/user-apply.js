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
exports.userApply = void 0;
const applicant_1 = require("../../models/applicant");
/**
 * @description userApply - 지원 현황과 변경된 부분을 리턴합니다.
 */
const userApply = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.id);
        const employerid = Number(req.params.employerid);
        const isApply = yield applicant_1.Applicant.findAll({ raw: true, where: { user_id: userId } });
        for (let i = 0; i < isApply.length; i++) {
            const data = isApply[i];
            if (data.employer_id === employerid && data.is_apply === 1) {
                return res.status(200).json({ message: "이미 지원하셨습니다." });
            }
            else {
                yield applicant_1.Applicant.update({ is_apply: 1 }, { where: { user_id: userId } });
                const successApply = { user_id: userId, employer_id: employerid, is_apply: 1 };
                return res.status(201).json({ message: "지원이 완료되었습니다.", successApply });
            }
        }
    }
    catch (err) {
        console.log("잘못된 접근입니다.", err);
        res.status(404).json({ message: "잘못된 접근입니다.", err });
    }
});
exports.userApply = userApply;
