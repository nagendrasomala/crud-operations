const express = require("express");
const studentRoute = express.Router();
const studentSchema = require("../model/studentSchema");
const mongoose = require("mongoose");

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
});
studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
});
studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err) {
            return err;
        }
        else{
            res.send(data);
        }
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
});

studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
});

module.exports = studentRoute;