import mongoose from "mongoose";

const quotationSchema = new mongoose.Schema({
    
    drug: { type: Array, required:true},
    quantity: { type: Number, required: true},
    address:{type:Object,required:true},
    date: {type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const quotationModel = mongoose.models.order || mongoose.model("order", quotationSchema);
export default quotationModel;