import httpStatus from "http-status"
import { create } from "../services/user.service.js";

async function createUser (req, res){
    try{
        const data = await create(req?.body);
    }catch(error){
        console.log(error?.message);
        res.status(error?.statusCode).json({
            message : "Internal Server Error",
            error : error?.message
        })
    }
}

export {
    createUser
}