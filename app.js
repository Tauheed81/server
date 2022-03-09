const dotenv = require("dotenv");
const mongoose =require("mongoose");
const express = require("express");
const app = express();

dotenv.config({path: "/config.env"});

const DB = process.env.DATABASE;
 
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifieldTopology:true,
    useFindAndModify:false
}).then(()=>{
    
        console.log("connection successfull");
}).catch((err)=> console.log("no connection"));


const middleware =(req,res,next)=>{
    console.log("hello my middleware");

    next();
}
app.get("/",(req,res)=>{
    res.send("hello wrold  from  the server");
});


app.get("/contact", middleware, (req,res)=>{
    res.send("hello contact  from  the server");
});

app.get("/about",(req,res)=>{
    res.send("hello about  from  the server");
});


app.get("/singing",(req,res)=>{
    res.send("hello login  from  the server");
});



app.get("/singup",(req,res)=>{
    res.send("hello  registered  from  the server");
});



app.listen(3000,()=>{
    console.log("server is running  at port no 3000");
})