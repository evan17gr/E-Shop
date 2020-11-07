const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const productRoutes = require("./routes/productRouter");
const userRoutes = require("./routes/userRoutes");


dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("API is running...");
})
app.use("/api/products",productRoutes);
app.use("/api/users",userRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT,console.log(`Server is in ${process.env.NODE_ENV} mode running on port ${PORT}`.yellow.bold));