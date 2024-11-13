import express from "express"; // import express
import dotenv from "dotenv";   // import dotenv
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

//const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

// middleware to parse the incoming request with JSON payloads (from req.body)
app.use(express.json());
// middleware to access the cookies
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//     root route http://localhost:5001/
//     res.send("hello world");
// });

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});