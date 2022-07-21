import { Posts } from "../../models/post";
import { RequestHandler } from "express";

/**
 * @description @companySearch - 쿼리를 받아서 name, country, position, tech로 검색하여
 * 해당하는 공고문을 리턴합니다.
 */
export const companySearch : RequestHandler = async (req, res, next) => {
    
    try {
        const query: string = req.query.name as string 

        if(query) {
            const data = await Posts.findOne({
                raw : true, where : { name : query }
            });
            
            const isName = await Posts.findAll({ raw : true });

            let exist = false;

            for(let i = 0; i < isName.length; i++) {
                if(isName[i].name === query) {
                    exist = true;
                }
            }
            if(!exist) {
                return res.status(400).json({ message : "삭제되었거나 생성되지 않은 공고문입니다." })
            }

            delete data?.detail;
            
            return res.status(200).json({ message : "ok", data })
        }
    }
    catch(err: any) {
        console.log(err);

        throw(err);
    }
    
    try {
        const query : string = req.query.country as string;

        if(query) {
            const data = await Posts.findAll({
                raw : true, where : { country : query }
            });
            
            let exist = false;
    
            if(data) {
                exist = true;
            }
            
            if(!exist) {
                return res.status(400).json({ message : "삭제되었거나 생성되지 않은 공고문입니다." })
            }
            
            for(let i = 0; i < data.length; i++) {
                delete data[i].detail;
            }
            
            return res.status(200).json({ message : "ok", data })
        }
    }
    catch(err: any) {
        console.log(err);

        throw(err);
    }
    
    try {
        const query : string = req.query.position as string;


        if(query) {
            const data = await Posts.findAll({
                raw : true, where : { position : query }
            });

            let exist = false;

            if(data) {
                exist = true;
            }
            
            if(!exist) {
                return res.status(400).json({ message : "삭제되었거나 생성되지 않은 공고문입니다." })
            }
            
            for(let i = 0; i < data.length; i++) {
                delete data[i].detail;
            }
            
            return res.status(200).json({ message : "ok", data })
        }
    }
    catch(err: any) {
        console.log(err);

        throw(err);
    }

    try {
        const query : string = req.query.tech as string;


        if(query) {
            const data = await Posts.findAll({
                raw : true, where : { tech : query }
            });

            let exist = false;

            if(data) {
                exist = true;
            }
            
            if(!exist) {
                return res.status(400).json({ message : "삭제되었거나 생성되지 않은 공고문입니다." })
            }
            
            for(let i = 0; i < data.length; i++) {
                delete data[i].detail;
            }
            
            return res.status(200).json({ message : "ok", data })
        }
    }
    catch(err: any) {
        console.log(err);

        throw(err);
    }

    try {
        res.status(404).json({ message : "잘못된 URL입니다." })
    }
    catch(err: any){
        console.log("잘못된 접근입니다.", err);

        res.status(404).json({ message : "잘못된 접근입니다.", err })
    }
}