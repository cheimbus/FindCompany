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
exports.addCompanyUserApplicant = void 0;
const post_1 = require("../../models/post");
const applicant_1 = require("../../models/applicant");
const user_1 = require("../../models/user");
/**
 * @description @addCompanyUserApplicant - 테스트하기 위해 공고문과 유저, 지원자를 만듦
 */
const addCompanyUserApplicant = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield post_1.Posts.findOrCreate({
        where: { id: 1 },
        defaults: {
            id: 1,
            name: "개발짱회사",
            country: "korea",
            position: "back-end",
            tech: "js,ts",
            message: "열정있는 신입 개발자를 모집합니다! 많은 지원바랍니다!",
            detail: "사실 경력자를 더 선호해요"
        }
    });
    yield user_1.Users.findOrCreate({
        where: { id: 2 },
        defaults: {
            id: 2,
            name: "siu"
        }
    });
    yield applicant_1.Applicant.findOrCreate({
        where: { id: 1 },
        defaults: {
            id: 1,
            user_id: 2,
            post_id: 1,
            employer_id: 123123,
            is_apply: 0,
        }
    })
        .then(([result, created]) => {
        if (created) {
            res.status(201).json({ message: "회사공고가 생성되었습니다.", result });
        }
        else {
            res.status(200).json({ message: "이미 생성되었습니다." });
        }
    });
});
exports.addCompanyUserApplicant = addCompanyUserApplicant;
