import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import connection from "./db/connection.js";
import bodyParser from "body-parser"

const app = express();
const PORT = process.env.PORT || 8000

dotenv.config();

app.use(express.json()); // parse the imcoming requests with JSON payloads (from the req.body)
app.use(bodyParser.json());

app.use("/api/auth", authRoutes)

// app.get("/", (req,res) => {
//     // root route http://localhost:5000/
//     res.send("shut your mouth!");
// });

app.listen(PORT, () => {
    connection();
    console.log(`Server is running on ${PORT}`)
})