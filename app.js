const express=require("express")

const app=express();


app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/public/views/home-page.html`)
})
app.get("/about",(req,res)=>{
    res.sendFile(`${__dirname}/public/views/about-page.html`)
})
app.get("/works",(req,res)=>{
    res.sendFile(`${__dirname}/public/views/works-page.html`)
})
app.get("/galery",(req,res)=>{
    res.sendFile(`${__dirname}/public/views/galery-page.html`)
})




app.listen(3000,()=>{
    console.log("htpp://localhost:3000");
})