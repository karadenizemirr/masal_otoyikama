import { NextApiRequest, NextApiResponse } from "next";

export default function serviesApi(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method === 'POST'){
            // Create Service

            console.log('burada')
        }

        return res.status(400).json({ok:false})
    }catch(err){
        return []
    }
}