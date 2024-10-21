import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        // check if token is provided
        if (!token) {
            // 401 - unauthorized
            return res.status(401).json({ error: "Unauthorized - No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // need jwt secret to decode token
        // check if token has been decoded
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password");
        // if user not found
        if (!user) {
            return res.status(404).json({ error: "User not found"});
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.sattus(500).josn({ error: "Internal Server Error" });
    }
};

export default protectRoute;