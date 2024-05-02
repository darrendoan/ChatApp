import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"

import connection from "./db/connection.js";

const app = express();
const PORT = process.env.PORT || 8000

dotenv.config();

app.use(express.json()); // parse the imcoming requests with JSON payloads (from the req.body)
// app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req,res) => {
//     // root route http://localhost:5000/
//     res.send("shut your mouth!");
// });

app.listen(PORT, () => {
    connection();
    console.log(`Server is running on ${PORT}`)
})