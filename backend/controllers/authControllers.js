import User from "../models/user.js";

export const login = async (req, res) => {
    try {

    } catch (error) {

    }
}

export const logout = (req, res) => {
    try {

    } catch (error) {

    }
}

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match!!" })
        }
        const user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({ error: "Username already exists!" })
        }

        // hash your password here
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        })

    } catch (error) {
        console.log("Error in signup in controller", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}