import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import productRoutes from "./routes/product.js"

import cors from "cors";

const app = express()
const PORT = process.env.PORT || 5000

const corsOptions = {
    origin: "*"
}

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


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.use(express.json())
app.use(cors(corsOptions));

app.use("/api/auth", authRoutes)

app.use("/api/user", userRoutes)

app.use("/api/product", productRoutes)








