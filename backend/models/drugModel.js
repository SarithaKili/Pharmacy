
import mongoose from 'mongoose';

const DrugSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    pricePerGram: { type: Number, required: true }
});

const drugModel = mongoose.model('Drug', DrugSchema);
export default drugModel;