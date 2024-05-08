import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"

import connection from "./db/connection.js";
import { server } from "./socket/socket.js";
import { app } from "./socket/socket.js";

const PORT = process.env.PORT || 8000

dotenv.config();

app.use(express.json()); // parse the imcoming requests with JSON payloads (from the req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


server.listen(PORT, () => {
    connection();
    console.log(`Server is running on port ${PORT}`)
})