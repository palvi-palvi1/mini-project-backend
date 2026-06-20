import User from './models/userModel.js';
import express from "express";
import cors from "cors";
import connectDB from './config/db.js';

connectDB();

const app = express();
app.use(express.json());
app.use(cors({
        origin: "http://localhost:5179"
}));

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ "message": "User already exists" });
    }

         const newUser = new User({ name, email, password });
           await newUser.save();

          res.status(201).json({ "message": "User registered successfully", user: newUser });
    } catch (err) {
        res.status(500).json({ "message": "Server error", error: err.message });
    }
});

app.post("/login", async (req, res) => {
    const { email, password} = req.body;

    try {
    const user = await User.findOne({ email: email });
    if(!user) {
    return res.status(404).json({"message": "user not found"});
    }

    if(user.password === password) {
    return res.status(200).json(user);
    }
    res.status(401).json({"message": "Invalid Credentials"});

    } catch (err) {
    res.status(500).json({ "message": "Server error", error: err.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});