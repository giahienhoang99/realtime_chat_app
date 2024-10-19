import express from "express"; // import express
import dotenv from "dotenv";   // import dotenv

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
    // root route http://localhost:5000/
    res.send("hello world");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));