import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js"

export const sendReservation = async (req, res, next) => {
    // const {firstName, lastName, email, phone, date, time } = req.body;
    console.log(req);
    console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const date = req.body.date;
    const time = req.body.time;


    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill full reservation form:", 400));
    }
    try {
        await Reservation.create(firstName, lastName, email, phone, date, time);
        res.status(200),
        json({
            success: true,
            message: "Reservation Sent Sucessfully",
        });
    }catch (error) {
        if (error.name == "ValidationError") {
            const validattionErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validattionErrors.join(", "), 400));
        }
    }
};

