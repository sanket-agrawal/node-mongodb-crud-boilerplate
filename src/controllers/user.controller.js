import httpStatus from "http-status"
import { create } from "../services/user.service.js";

async function createUser (req, res){
    try{
    const data = await create(req?.body);
        res.status(httpStatus.OK).json({
            message : "User Created Sucessfully!",
            data
        })
    }catch(error){
        
    }
}

async function getUserById (req, res){
    try{

    }catch(error){

    }
}

export {
    createUser,
    getUserById
}