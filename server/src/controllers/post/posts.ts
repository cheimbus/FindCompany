import { Posts } from "../../models/post";
import { RequestHandler } from "express";

/**
 * @description @getAllCompany - 모집 공고문 전체를 리턴합니다.
 */
export const getAllCompany: RequestHandler = async (req, res, next) => {
  try {
    const result = await Posts.findAll({ raw: true });

    for(let i = 0; i < result.length; i++) {
      delete result[i].detail;
    }

    if(!result) {
      res.status(200).json({ message : "목록이 존재하지 않습니다." });
    }
    else {
      res.status(200).json({ message : "ok", result });
    }
  }
  catch(err: any){
    console.log("잘못된 접근입니다.", err);
    
    res.status(404).json({ message : "잘못된 접근입니다.", err })
}
}