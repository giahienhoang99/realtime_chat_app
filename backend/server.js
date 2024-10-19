import express from "express"; // import express
import dotenv from "dotenv";   // import dotenv
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
    // root route http://localhost:5000/
    res.send("hello world");
});

app.use("/api/auth", authRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));