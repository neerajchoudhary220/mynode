const express = require('express');
const fs = require('fs');
const app =express();
const port = process.env.PORT||8080;
const path = require('path');
app.use(express.static(path.join(__dirname,"/files")));
var home = fs.readFileSync('files/home.html');
var about_us = fs.readFileSync('files/about_us.html');
var contact = fs.readFileSync('files/contact.html');
app.get("/",(req,res)=>
{
    res.writeHead(200,{'Content-Type':"text/html"});
    res.write(home);
    res.write('<br><b style="color:green;">Hii</b>');
    res.send();
});
app.get("/contact",(req,res)=>
{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(contact);
    res.send();
});
app.get("/about",(req,res)=>
{
    res.writeHead(200,{'Content_type':'text/html'});
    res.write(about_us);
    res.send();
});
app.listen(port,()=>
{
    console.log("Server running is",port);
});