import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import ReservationRouter from "./routes/reservationRoute.js";

dotenv.config();
const PORT = process.env.PORT;
// app
const app = express();
// dbconnection, cloudconnection
dbConnection(); 
//  middleware
app.use(express.json());   //to convert string to json
app.use(express.urlencoded({extended: true }));
app.use(cors({
    origin: [process.env.FRONEND_URL],
    methods: ["POST"],
    credentials: true,
}))
app.use(errorMiddleware)
// routes
app.use('/api/v1/reservation', ReservationRouter)

export default app;


