import User from '../models/user.model.js';

export const signup = async (req,res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        
        if (password !== confirmPassword) {
            return res.status(400).json({error:"Password do not match"});
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error:"Username already exist"});
        }

        // HASH PASSWORD HERE

        // 

    } catch (error) {
        
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