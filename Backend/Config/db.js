import mongoose from "mongoose";

const MONGO_DB_URI = "mongodb+srv://cafetrio606142:iiitcafe123@cluster0.k6mvr.mongodb.net/cafetrio?retryWrites=true&w=majority&appName=Cluster0"

const connectToDB = async()=>{
    try {
        const conn = await mongoose.connect(MONGO_DB_URI);
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.log("Error in Connecting to Database");
        
    }
}

export default connectToDB;