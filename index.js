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
