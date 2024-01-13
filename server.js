import express from "express"
import bodyParser from "body-parser";
import { urlencoded } from "body-parser";


const express= require("express");
const app=express();

const bodyParser=require("body-parser");

app.get("/",(req,res) => {
    res.send('sfsjfs')})
    


app.get("/about",(req,res) => {
    res.send("express is onn")})
    
app.get("/contact",(req,res) => {
    res.send("express is onn")})
    

app.get("/addrecipe",(req,res) => {
    res.send("express is onn")})
    

app.get("/recipe",(req,res) => {
    res.send("express is onn")})
                
            
                        
    

app.listen(3000,funtion(){
    console.log("server is running on 3000");
})
