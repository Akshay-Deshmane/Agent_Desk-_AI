import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,      
        required : true,
    },
    role : {
        type : String,
        default : "user", 
        enum : ["user", "moderatorl", "admin"],
    },
    skills : [String],
    createdAt : {
        type : Date,
        default : Date.now,
    }
})

const userModel = mongoose.model("users", userSchema);

export default userModel;