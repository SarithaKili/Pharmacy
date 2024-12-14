import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import drugRouter from "./routes/drugRouter.js";
import prescriptionRouter from "./routes/prescriptionRouter.js";
import dotenv from 'dotenv';
import userRouter from "./routes/userRouter.js";
import quotationRouter from "./routes/quotationRouter.js";
dotenv.config();
// App config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

 //DB connection
connectDB();

// API endpoints
app.use("/api/drug", drugRouter ); // Correctly set the route
app.use("/image", express.static('uploads'));
app.use("/api/prescription",prescriptionRouter);
app.use("/api/user",userRouter);
app.use("/api/quotation",quotationRouter);


// Test endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start the server
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));