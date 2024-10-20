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

export const login = async (req,res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
        
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error"});
    }
};

export const logout = async (req,res) => {
    try {
        // logout means to clear the JWT stored in the cookie
        // this line sets the value of jwt cookie to an empty string "" 
        // and maxAge to 0 => the cookie expiration time = 0 
        // => cookie is deleted from the client browser immediately
        // res.cookie(name_of_cookie, value_to_be_stored_in_cookie, options)
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};