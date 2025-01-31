import express from "express";
import Order from "../Models/Order.js";

const orderNow = express.Router();

orderNow.post('/orderNow',async(req,res)=>{
    const {customerId,items,totalAmount} = req.body;
    if(!customerId || !items || !totalAmount){
        return res.status(400).json({ error: "Missing required fields" });
    }
    const data = new Order({
        customerId,
        items,
        totalAmount
    });
    const myOrder = await data.save();
    res.status(200).json({
        message:"Order placed",
        Order: myOrder
    })
})

export default orderNow;