import express from "express"
import connectToDB from "./Config/db.js"
import getMenu from "./Routes/getMenu.js"
import getOrder from "./Routes/getOrder.js";
import placeOrder from "./Routes/placeOrder.js";
import register from "./Routes/register.js";
import login from "./Routes/login.js";


connectToDB();

const app = express();
app.use(express.json());
const PORT = 4040;

  app.get('/', (req, res) => {
    res.send('API is running...');
  });
  app.use('/api',getMenu);
  app.use('/api',getOrder);
  app.use('/api',placeOrder);
  app.use('/api',register);
  app.use('/api',login);

app.listen(PORT,()=>{
    console.log(`Server running on PortNo. ${PORT}`);
})