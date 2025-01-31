import express from "express"
import Order from "../Models/Order.js";
import Menu from "../Models/Menu.js"
import mongoose from "mongoose";

const placeOrder = express.Router();

placeOrder.post('/placeOrder',async(req,res)=>{
    try {
        const {customerId,items,totalAmount}=req.body;
        
         // Convert menuId in items array to ObjectId
        const updatedItems = items.map(item => ({
            menuId: new mongoose.Types.ObjectId(item.menuId),
            quantity: item.quantity
        }));

        const etValues = await Promise.all(updatedItems.map(async (item) => {
            const menuItem = await Menu.findOne({_id:item.menuId });
            // console.log(item.menuId);
            
            if(menuItem){
                return menuItem.et;
            }
            else{
                console.log("item not found");
                return 0;
            }
        }));
        console.log(etValues);
        
        const maxEt = Math.max(...etValues);
        console.log("Max ET ",maxEt);
        
        console.log(updatedItems);
        
        const data = new Order({
            customerId:new mongoose.Types.ObjectId(customerId),
            items:updatedItems,
            totalAmount,
            timeToPrepare:maxEt
        });
        console.log(data);
        
        const order = await data.save();
        res.status(200).json({
            message:"Order Placed",
            Order:order
        })
    } catch (error) {
        console.log(error);
        
        res.status(400).json({
            message:error
        })
    }
})

export default placeOrder;