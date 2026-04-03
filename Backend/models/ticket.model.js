import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    title : String,
    description : String,
    status : {
        type : String,
        default : "TODO",
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    },
    assignedTO : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        default : null
    },
    priority : String,
    deadline : Date,
    helpfulNotes : String,
    relatedSkills : [String],
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const ticketModel = mongoose.model("tikcets", ticketSchema);

export default ticketModel;