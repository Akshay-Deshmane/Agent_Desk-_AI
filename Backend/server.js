import app from "./src/app.js";
import dotenv from "dotenv";
import connectTODB from "./db/db.js";

dotenv.config();

connectTODB();
app.listen(3000, () => {
    console.log("server is started sucessfully");
})