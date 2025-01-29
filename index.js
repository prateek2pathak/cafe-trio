import express from "express"
import connectToDB from "./Config/db.js"
import getMenu from "./Routes/getMenu.js"
import getOrder from "./Routes/getOrder.js";


connectToDB();

const app = express();
app.use(express.json());
const PORT = 4040;

  app.get('/', (req, res) => {
    res.send('API is running...');
  });
  app.use('/api',getMenu);
  app.use('/api',getOrder);

app.listen(PORT,()=>{
    console.log(`Server running on PortNo. ${PORT}`);
})