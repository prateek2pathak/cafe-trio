import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../Models/User.js";

const register = express.Router();

register.post('/register',async(req,res)=>{
    try {
        const {name,email,password,phoneNo} = req.body;

        if(!name || !email || !password || !phoneNo){
            return res.status(404).json({
                success:false,
                message:"Some fields are missing!!"
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(404).json({
                success:false,
                message:"User already exists with this email"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            name,
            email,
            password:hashedPassword,
            phoneNo
        })

        const saved_user = await newUser.save();
        console.log(saved_user.email);
        
        const payLoad = {
                    id:saved_user._id,
                    email:saved_user.email
                }
        
        const SECRET_KEY ="kjfendfkn";
        const jwtToken = jwt.sign(payLoad,SECRET_KEY,{expiresIn:"12h"})

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: { id: newUser._id, name: newUser.name, email: newUser.email,jwtToken }
        });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
})

export default register;