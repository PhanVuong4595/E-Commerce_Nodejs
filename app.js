import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import dbConnect from "./config/dbconnect";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// connnect database
dbConnect();

//Router
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", productRoute);

// connection
const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running port", PORT);
});
