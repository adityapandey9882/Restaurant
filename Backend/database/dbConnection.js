import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
export const dbConnection = ()=> {
    mongoose.connect(process.env.MONGODB_URL, {
        dbName: "Restuarant",
    })
    .then(() => console.log("DB connected successfully"))
    .catch( (error) => {
        console.log("DB facing connection issues");
        console.error(error.message);
    })
};
