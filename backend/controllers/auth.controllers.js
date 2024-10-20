import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req,res) => {
    try {

        const { fullName, username, password, confirmPassword, gender } = req.body;
        
        // check password confirmation 
        if (password !== confirmPassword) {
            return res.status(400).json({error:"Password do not match"});
        }

        const user = await User.findOne({username});

        // check if user already exists in database
        if (user) {
            return res.status(400).json({error:"Username already exist"});
        }

        // HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);  // every bcryptjs generate salt, most of the time we put 10 (unit for length of generation)
        const hashedPassword = await bcrypt.hash(password, salt);

        // PROFILE PIC
        // https://avatar-placeholder.iran.liara.run
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // CREATE NEW USER
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            // Generate JWT token here
            generateTokenAndSetCookie(newUser._id, res);

            // save new user to database
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
};

export const login = (req,res) => {
    console.log("loginUser");
    res.send("login");
};

export const logout = (req,res) => {
    console.log("logoutUser");
    res.send("logout");
};