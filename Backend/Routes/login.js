import express from "express";
import User from "../Models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



const login = express.Router();

login.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body;
        
        // Validate request
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                message:"User not found",
                success:false
            })
        }

        const passwordCheck = await bcrypt.compare(password,user.password);

        if(!passwordCheck){
            return res.status(404).json({
                message:"Incorrect Password",
                success:false
            })
        }

        const payLoad = {
            id:user._id,
            email:user.email
        }

        const SECRET_KEY ="kjfendfkn";
        const jwtToken = jwt.sign(payLoad,SECRET_KEY,{expiresIn:"12h"})
        res.status(200).json({
            success:true,
            message:"Login successful",
            jwtToken
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:true,
            message:error
        })
    }
})

export default login;