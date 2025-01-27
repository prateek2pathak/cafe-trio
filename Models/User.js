import mongoose from "mongoose";


const user_schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required:true,
        trim:true
    },
    password:{
        type: String,
        reqiured: true
    },
    phoneNo:{
        type:String,
        required: true
    }
})

const User = mongoose.model('user',user_schema);
console.log("Model created");

export default User;