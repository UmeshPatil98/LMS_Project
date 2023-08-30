
const cookieParser = require ( 'cookie-parser');
const express = require ( 'express');
const cors = require ('cors');

const app = express();



app.use(express.json());

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials: true

}));

app.use(cookieParser());
 
app.use('/ping',(req, res)=>{
    res.send('pong');
});

// trying to access routes any 

app.use('*',(req,res)=>{
    res.status(404).send('OOpss!!! 404 page not found')
})

//module.exports= app;

 