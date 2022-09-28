import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./routes/index.js";
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);
mongoose.connect(process.env.MONGO_URI, () => console.log("DB Connected"));
app.listen(8800, () => console.log("Backend server is running!"));
