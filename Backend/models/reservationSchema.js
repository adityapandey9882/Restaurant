import mongoose, { mongo } from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: (3, "First name must contain at least 3 characters!"),
        minLength: (30, "First name canot exceed 30 characters!"),
    },
    lastName: {
        type: String,
        required: true,
        minLength: (3, "Last name must contain at least 3 characters!"),
        minLength: (30, "Last name canot exceed 30 characters!"),
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valide email!"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain only 10 digits!"],
        maxLength: [10, "Phone number must contain only 10 digits!"]
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});


export const Reservation = mongoose.model("Reservation", reservationSchema);