import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import Products from "./data/Products.js";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log(err)
    })

app.get("/", (req, res) => {
    res.send("API is running...")
})

// app.get("/api/products", (req, res) => {
//     res.json(Products)
// })

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.use(express.json())

app.use("/api/auth",authRoutes)

app.use("/api/user",userRoutes)








