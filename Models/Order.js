import mongoose from "mongoose";


const order_schema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            menuId:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'Menu',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
        }
    ],
    totalAmount:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum: ['Pending','Process','Completed'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Order = mongoose.model('Order',order_schema);
console.log("Order Schema Created");

export default Order;