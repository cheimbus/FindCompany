import { RequestHandler } from "express";
import { Applicant } from "../../models/applicant";

/**
 * @description userApply - 지원 현황과 변경된 부분을 리턴합니다.
 */
export const userApply: RequestHandler = async (req, res, next) => {
    try{
        const userId: number = Number(req.params.id);
        
        const employerid: number = Number(req.params.employerid);

        const isApply = await Applicant.findAll({ raw : true, where : { user_id : userId } });

        for(let i = 0; i < isApply.length; i++) {
            const data = isApply[i];
            
            if(data.employer_id === employerid && data.is_apply === 1) {
                return res.status(200).json({ message : "이미 지원하셨습니다." })
            }
            else {
                await Applicant.update({ is_apply : 1}, { where : { user_id : userId } });

                const successApply = { user_id : userId, employer_id : employerid, is_apply : 1 };

                return res.status(201).json({ message : "지원이 완료되었습니다.", successApply })
            }
        }
    }
    catch(err: any){
        console.log("잘못된 접근입니다.", err);

        res.status(404).json({ message : "잘못된 접근입니다.", err })
    }
}