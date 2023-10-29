const express = require("express");
const app = express();
const studentRoute = require("./controller/studentRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://nagendrababusomala:nage123@cluster0.yfrinwe.mongodb.net/schooldb");
mongoose.set("strictQuery",true);
var db = mongoose.connection;
db.on("open",()=>console.log("connected to db"));
db.on("error",()=>console.log("Error connected"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute",studentRoute);

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})