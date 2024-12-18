import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        // fetch all users from db except the current logged in user (without password in params)
        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(allUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar in user controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}