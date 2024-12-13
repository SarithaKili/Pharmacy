import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import prescriptionRouter from "./routes/prescriptionRoute.js";
// import userRouter from "./routes/userRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use("/api/prescription", prescriptionRouter); // Correctly set the route
app.use("/image", express.static('uploads'));

// Test endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start the server
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));