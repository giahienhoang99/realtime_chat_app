import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
    // use token as a cookie
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
        httpOnly: true,         // prevent XSS (cross-site scripting) attacks
        sameSite: "strict",     // prevent CSRF (cross-site request forgery) attacks
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;