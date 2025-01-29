import express from "express";
import Menu from "../Models/Menu.js"; //compulsory to write .js


const getMenu  = express.Router();

getMenu.get('/getMenu',async(req,res)=>{
    try {
        const data = await Menu.find();
        res.status(200).json({ message: "Success", data: data });

    } catch (error) {
        res.status(400).json({
            message: error,
            success:false
        })
    }
})

export default getMenu;