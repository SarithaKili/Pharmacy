// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    role: { type: String, enum: ['User', 'Pharmacy'], required: true },
}, { minimize: false });

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;
/*
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData:{type:Object,default:{}}
}, { minimize: false })

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;*/