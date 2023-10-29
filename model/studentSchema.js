const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    rollno:{type:Number}
},{
    collection:"students"
})


module.exports = mongoose.model("studentSchema",studentSchema);