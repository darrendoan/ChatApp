import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path'

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"

import connection from "./db/connection.js";
import { server } from "./socket/socket.js";
import { app } from "./socket/socket.js";

const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // parse the imcoming requests with JSON payloads (from the req.body)
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"/frontend/dist"))); //static middleware

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

server.listen(PORT, () => {
    connection();
    console.log(`Server is running on port ${PORT}`)
})