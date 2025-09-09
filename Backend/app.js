//password = EdECg9hsIltdq7OI

const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes/UserRoutes'); // Importing the router
const app = express();
const cors = require('cors');
//Middleware
app.use(cors()); // Middleware to enable CORS
app.use(express.json()); // Middleware to parse JSON data
app.use("/user",router);

mongoose.connect("mongodb+srv://admin:EdECg9hsIltdq7OI@cluster0.4ydnymi.mongodb.net/")
.then(() => {console.log("Connected to MongoDB")})
.then(() => {
    app.listen(5000)
    
})      
.catch((err) => {console.log(err);});

