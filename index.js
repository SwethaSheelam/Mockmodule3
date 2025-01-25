const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
const os=require("os");

const userRoutes=require("./routes/userRoutes");

const userRoutes=require("./routes/blogRoutes");
const logger=require("./middlewares/logger");
dotenv.config();
const app=express();

app.use(bodyParser.json());
app.use(logger);
app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);
app.get("/",(req, res)=>{
    res.send("Welcome to Blog Platform API");

});
app.get("/memory",(req,res)=>{
    res.json({freeMemory:os.freemem()

    })
});
mongoose
.connect(process.env.)
.then(()=>console.log("Mongo Connected"))
.catch ((err)=>console.log("database connection error:",err))

app.listen(process.env.PORT,()=>{
    console.log("SERVER started ${process.env.PORT}");
})
