import prescriptionModel from '../models/prescriptionModel.js'; // Ensure the correct file extension
import fs from 'fs';

// Add prescription
const addPrescription = async (req, res) => {
    try {
        let image_filename = req.image.filename; // Ensure req.image is defined

        const prescription = new prescriptionModel({
            address: req.body.address, // Corrected to use req.body.address
            userNote: req.body.description,
            image: image_filename,
        });

        await prescription.save();
        res.json({ success: true, message: "Prescription added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding prescription" }); // Improved error message
    }
};

// Delete prescription
const removePrescription = async (req, res) => {
    try {
        const prescription = await prescriptionModel.findById(req.body.id);
        if (!prescription) {
            return res.status(404).json({ success: false, message: "Prescription not found" }); // Check if prescription exists
        }

        fs.unlink(`uploads/${prescription.image}`, (err) => {
            if (err) {
                console.error("Error deleting image file:", err); // Log any errors during deletion
            }
        });

        await prescriptionModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Prescription removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing prescription" }); // Improved error message
    }
};

export { addPrescription, removePrescription };