import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Enable Dotenv
dotenv.config()

// App Configuration
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Mongodb Connecting
mongoose.connect(`${process.env.DATABASE_URL}`).then(() => console.log("DB Connected"));

// Server Listening
const PORT = process.env.PORT || 5000
app.listen(PORT,() => console.log(`App is listening at http://localhost:${PORT}`))