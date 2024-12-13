// models/prescription.js
import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
  image: { type: String, required: true },
  address: { type: String, required: true },
  note: { type: String, required: true }
   

 },{ minimize: false })

const prescriptionModel = mongoose.models.prescription || mongoose.model("prescription", prescriptionSchema);
export default prescriptionModel;