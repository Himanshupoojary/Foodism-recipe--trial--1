const express= require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",funtion(req,yes){
    res.send("express is onn")})

//app.post


app.listen(3000,funtion(){
    console.log("server is running on 3000");
})
