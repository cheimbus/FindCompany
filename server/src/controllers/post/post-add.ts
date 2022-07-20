import { Posts } from "../../models/post";
import { Applicant } from "../../models/applicant";
import { Users } from "../../models/user";
import { RequestHandler } from "express";

/**
 * @description addCompanyUserApplicant - 테스트하기 위해 공고문과 유저, 지원자를 만듦
 */
export const addCompanyUserApplicant: RequestHandler = async (req, res, next) => {
        
    await Posts.findOrCreate({
          where: { id : 1 },
          defaults: {
            id : 1,
            name : "개발짱회사",
            country : "korea",
            position : "back-end",
            tech : "js,ts",
            message : "열정있는 신입 개발자를 모집합니다! 많은 지원바랍니다!",
            detail : "사실 경력자를 더 선호해요"
          }
      })

      await Users.findOrCreate({
        where: { id : 2 },
        defaults: {
          id : 2,
          name: "siu"
        }
    })
    
      await Applicant.findOrCreate({
        where: { id : 1 },
        defaults: {
          id : 1,
          user_id: 1,
          employer_id : 123123,
          is_apply: 0,
        }
    })
    .then(([result, created]) => {
          if(created) {
              res.status(201).json({ message : "회사공고가 생성되었습니다.", result })
          }
          else {
            res.status(200).json({ message : "이미 생성되었습니다." })
          }
      })

}