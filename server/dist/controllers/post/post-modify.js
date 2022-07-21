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
exports.companyModify = void 0;
const post_1 = require("../../models/post");
/**
 * @description @companyModify - 해당 공고문을 수정합니다.
 */
const companyModify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyId = req.params.id;
        const isPost = yield post_1.Posts.findOne({ raw: true, where: { id: companyId } });
        /**
         * @description @PostModify - enum타입으로 값을 지정하여 postUpdate에 enum을 넣었는데
         * string으로 인식하지 못한다. console로 PostModify.name 등을 typeOf을 하였더니 string타입인데
         * 좀 더 알아봐야겠음. 일단 req.body로 값을 넣었음
         *
         */
        /*
        enum PostModify { name = req.body.name, country = req.body.country,
        position = req.body.position, tech = req.body.tech, message = req.body.message,
        detail = req.body.detail };
        */
        if (!isPost) {
            return res.status(400).json({ message: "해당하는 공고문이 존재하지 않습니다." });
        }
        else {
            const postUpdate = yield post_1.Posts.update({
                name: req.body.name, country: req.body.country, position: req.body.position,
                tech: req.body.tech, message: req.body.message, detail: req.body.detail,
            }, { where: { id: companyId } });
            return res.status(201).json({ message: "모집공고가 수정되었습니다.", postUpdate });
        }
    }
    catch (err) {
        console.log("잘못된 접근입니다.", err);
        res.status(404).json({ message: "잘못된 접근입니다.", err });
    }
});
exports.companyModify = companyModify;
