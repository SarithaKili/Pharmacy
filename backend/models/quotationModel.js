// models/Quotation.js
import mongoose from "mongoose";

const quotationSchema = new mongoose.Schema({
    prescription_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Prescription', required: true },
    pharmacy_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['Sent', 'Accepted', 'Rejected'], 
        default: 'Sent' 
    },
}, { minimize: false });

const quotationModel = mongoose.models.Quotation || mongoose.model("Quotation", quotationSchema);
export default quotationModel;