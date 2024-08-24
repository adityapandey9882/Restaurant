import app from "./app.js";


app.listen(process.env.PORT, ()=> {
    console.log(`Server Running on Port no ${process.env.PORT}`)
})


