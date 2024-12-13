import express from "express";
import { addPrescription, listPrescription, removePrescription } from "../controller/prescriptionController.js";
import multer from "multer";

const prescriptionRouter=express.Router();


//image storage engine
const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
      return cb(null,`${Date.now()}${file.originalname}`);
  }
})

const upload = multer({ storage: storage})

prescriptionRouter.post("/add",upload.single('image'),addPrescription);
prescriptionRouter.get("/list",listPrescription)
prescriptionRouter.get("/remove",removePrescription)

export default prescriptionRouter;