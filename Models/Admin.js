import mongoose from "mongoose";


const admin_schema = new mongoose.Schema({
    username:{
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
    }
})

const Admin = mongoose.model('Admin',admin_schema);
console.log("Admin Model created");

export default Admin;