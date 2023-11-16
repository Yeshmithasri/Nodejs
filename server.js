const express=require("express");
const app=express();
const path=require("path");

app.get("/fruit",(req,res)=>{
    res.sendFile(path.join(__dirname,"fruits.html"));
})
app.get("/vege",(req,res)=>{
    res.sendFile(path.join(__dirname,"vegetables.html"));
})
app.get("/flower",(req,res)=>{
    res.sendFile(path.join(__dirname,"Flowers.html"));
})
app.listen(3013 ,()=>{
    console.log("server is running");
})