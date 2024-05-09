import User from "../models/user.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match!!" });
        }

        // Check if the username already exists
        const existingUser = await User.findOne({ userName });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists!" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Generate profile picture URL
        const profilePic = `https://avatar.iran.liara.run/public/${gender === "male" ? "boy" : "girl"}?username=${userName}`;

        // Create a new user
        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic
        });

        // Save the new user to the database
        await newUser.save();

        // Generate token and set cookie
        generateTokenAndSetCookie(newUser._id, res);

        // Send success response
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        });
    } catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        // Find user by username
        const user = await User.findOne({ userName });

        // Check if user exists and if password is correct
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // Generate token and set cookie
        generateTokenAndSetCookie(user._id, res);

        // Send success response
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const logout = (req, res) => {
    try {
      // Clear JWT cookie
      res.clearCookie("jwt");
  
      // Send success response
      res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      console.error("Error in logout controller:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

