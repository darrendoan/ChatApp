import User from "../models/user.js";

export const getUsersForSidebar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id

        const allUsers = await User.find({ _id: { $ne: loggedInUserId}})

        res.status(200).json(allUsers)
    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({error: error.message})
    }
}