import { Posts } from "../../models/post";
import { RequestHandler } from "express";

/**
 * @description companyDetail - 일반 공고문에는 보이지 않는 detail을 리턴한다.
 */
export const companyDetail: RequestHandler = async (req, res, next) => {
    
    try {
        const companyId = req.params.id;

        if(companyId) {
            const data = await Posts.findOne({ where : { id : companyId } });

            if(!data) {
                return res.status(400).json({ message : "존재하지 않은 공고문입니다." })
            }
            return res.status(200).json({ message : "ok", data })
        }
    }
    catch(err: any){
        console.log("잘못된 접근입니다.", err);
        
        res.status(404).json({ message : "잘못된 접근입니다.", err })
    }
}