import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(cors({
    origin: [process.env.FRONEND_URL],
    methods: ["POST"],
    credentials: true,
}))

app.use('/api/v1/reservation', reservationRouter)
app.use(express.json());   //to convert string to json
app.use(express.urlencoded({extended: true }));

dbConnection(); 

app.use(errorMiddleware)
export default app;