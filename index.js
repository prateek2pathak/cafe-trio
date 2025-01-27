import express from "express"
import connectToDB from "./Config/db.js"
import User from "./Models/User.js";
import Menu from "./Models/Menu.js"
import Order from "./Models/Order.js";


connectToDB();

const app = express();
const PORT = 4040;

app.get('/', (req, res) => {
    res.send('API is running...');
  });

app.listen(PORT,()=>{
    console.log(`Server running on PortNo. ${PORT}`);
})