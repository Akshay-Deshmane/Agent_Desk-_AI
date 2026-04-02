import mongoose  from "mongoose";


async function connectTODB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("server is connected ot DB");
    }
    catch(err) {
        console.log("server is not connected to DB");
    }
}


export default connectTODB;