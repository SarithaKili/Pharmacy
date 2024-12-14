import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  email: { type: String, required: true, unique: true }, 
  password: { type: String, required: true }, 
  address: { type: String, required: true }, 
  contact: { type: String, required: true }, 
  dob: { type: Date, required: true },
  userRole: { type: String, required: true, enum: ['patient', 'pharmacist'] }
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;