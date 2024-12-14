import drugModel from '../models/drugModel.js'; // Ensure the correct file extension

// List all drugs
const listDrug = async (req, res) => {
    try {
        const drugs = await drugModel.find({});
        res.json({ success: true, data: drugs });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching drugs" });
    }
}

// Add drug
const addDrug = async (req, res) => {
    try {
        const drug = new drugModel({
            name: req.body.name, // Ensure this is being sent
            pricePerGram: req.body.pricePerGram // Ensure this is being sent
        });

        await drug.save();
        res.json({ success: true, message: "Drug added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding drug" });
    }
};

// Delete drug
const removeDrug = async (req, res) => {
    try {
        const drug = await drugModel.findById(req.body.id);
        if (!drug) {
            return res.json({ success: false, message: "Drug not found" });
        }
        await drugModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Drug removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing drug" });
    }
}

export { listDrug, addDrug, removeDrug };