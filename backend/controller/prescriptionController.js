import prescriptionModel from "../models/prescriptionModel.js";
import fs from 'fs'

// add food
const addPrescription = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded." });
      }
  
      const image_filename = req.file.filename; // Ensure this matches your upload key
  
      const prescription = new prescriptionModel({
        address: req.body.address,
        note: req.body.note,
        image: image_filename
      });
  
      await prescription.save();
      res.json({ success: true, message: "Prescription added" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error saving prescription" });
    }
  };
//all Prescription list
const listPrescription=async(req,res)=>{
    try{
        const prescription=await prescriptionModel.find({});
        res.json({success:true,data:prescription})
    }catch(error){
        res.json({success:false,message:"error"})
    }

}

// delete Prescription
const removePrescription = async (req, res) => {
    try {

        const Prescription = await PrescriptionModel.findById(req.body.id);
        fs.unlink(`uploads/${Prescription.image}`, () => { })

        await PrescriptionModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Prescription Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}


export {addPrescription,listPrescription,removePrescription}
