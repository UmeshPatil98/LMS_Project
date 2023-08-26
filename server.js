

const app = require('./app.js')
const  { config } = require('dotenv');
const connectToDB = require('./config/db.Connection.js');
config();


const PORT = process.env.PORT || 5011;

app.listen(PORT , async ()=>{
    await connectToDB();
    console.log(`app is runnning at https:localhost:${PORT}`);
  
})
