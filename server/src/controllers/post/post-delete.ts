import { Posts } from "../../models/post";
import { RequestHandler } from "express";

/**
 * @description deleteCompany - 해당 공고문을 삭제한다.
 */
export const deleteCompany: RequestHandler = async (req, res, next) => {
    
    try {
        const companyId = req.params.id;

        if(!companyId) {
            return res.status(400).json({ message : "해당하는 id값이 없습니다." })
        }
        else {
            const isDelete = await Posts.findOne({ where : { id : companyId } });
            
            if(!isDelete) {
                return res.status(400).json({ message : "이미 삭제되었습니다." });
            }
            else {
                await Posts.destroy({ where : { id : companyId } });
                
                return res.status(200).json({ message : "모집공고가 삭제되었습니다." })
            }
        }
    }
    catch(err: any){
        console.log("잘못된 접근입니다.", err);
        
        res.status(404).json({ message : "잘못된 접근입니다.", err })
    }
};