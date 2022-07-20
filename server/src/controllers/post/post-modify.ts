import { RequestHandler } from "express";
import { Posts } from "../../models/post";

/**
 * @description @companyModify - 해당 공고문을 수정합니다.
 */
export const companyModify: RequestHandler = async (req, res, next) => {
    
    try {
        const companyId = req.params.id;

        const isPost = await Posts.findOne({ raw : true, where : { id : companyId } });
        
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
        
        if(!isPost) {
            return res.status(400).json({ message : "해당하는 공고문이 존재하지 않습니다." })
        }
        else {
            const postUpdate = await Posts.update({
                name: req.body.name , country: req.body.country, position: req.body.position,
                tech: req.body.tech, message: req.body.message, detail: req.body.detail, 
            }, { where : { id : companyId } })

            return res.status(201).json({ message : "모집공고가 수정되었습니다.", postUpdate })
        }

    }
    catch(err: any){
        console.log("잘못된 접근입니다.", err);

        res.status(404).json({ message : "잘못된 접근입니다.", err })
    }
}
