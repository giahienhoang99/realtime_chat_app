import express from "express"; // import express
import dotenv from "dotenv";   // import dotenv

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

// middleware to parse the incoming request with JSON payloads (from req.body)
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    // root route http://localhost:5000/
    res.send("hello world");
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});