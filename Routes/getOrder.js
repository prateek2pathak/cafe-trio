import express from "express";
import Order from "../Models/Order.js"
import User from "../Models/User.js";
import Menu from "../Models/Menu.js"
import mongoose from "mongoose";


const getOrder = express.Router();

getOrder.post('/getOrder', async (req, res) => {
    const { customerId } = req.body;

if (!customerId) {
    return res.status(400).json({ success: false, message: "Customer ID is required" });
}

const objectId = mongoose.Types.ObjectId.createFromHexString(customerId);
console.log(objectId);

try {
    const orders = await Order.find({ customerId: objectId })
    .populate("customerId", "name")  // Populate user name
    .populate("items.menuId", "name"); // Populate menu details
    console.log(orders);
    

    res.status(200).json({ success: true, data: orders });
} catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
}
});


export default getOrder;