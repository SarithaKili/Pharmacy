import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
    
    image: { type: String, required: true }, 
    address: { type: String, required: true },
    userNote:{ type:String, required:true}
})

const prescriptionModel = mongoose.models.prescription || mongoose.model("prescription", prescriptionSchema);
export default prescriptionModel;