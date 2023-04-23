const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());

//routes
app.get("/",(req, res) =>{
    res.send("Home Page");
});

//connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{

        app.listen(PORT, ()=> {
            console.log(`Server Running on port ${PORT}`)
        })

    })
    .catch((err) => console.log(err))