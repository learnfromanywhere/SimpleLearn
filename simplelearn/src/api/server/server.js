const express=require('express');
const helmet=require('helmet');
const cors= require('cors');
const cookieParser=require('cookie-parser');

const server=express();
server.use(helmet());
server.use(cors());
server.use(cookieParser());

server.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server running success"
    })
})

module.exports=server;