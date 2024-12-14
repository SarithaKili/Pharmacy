import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

// Create a token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.json({ success: false, message: "Email and password are required" });
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        res.json({ success: true, token, userRole: user.userRole });
    } catch (error) {
        console.log("Login error:", error);
        res.json({ success: false, message: "Error logging in" });
    }
}

// Register user
const registerUser = async (req, res) => {
    const { name, email, password, address, contact, dob, userRole } = req.body;

    // Validate input
    if (!name || !email || !password || !address || !contact || !dob || !userRole) {
        return res.json({ success: false, message: "All fields are required" });
    }

    try {
        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            address,
            contact,
            dob,
            userRole
        });
        await newUser.save();
        const token = createToken(newUser._id);
        res.json({ success: true, token, userRole: newUser.userRole });
    } catch (error) {
        console.log("Registration error:", error);
        res.json({ success: false, message: "Error registering user" });
    }
}

export { loginUser, registerUser };