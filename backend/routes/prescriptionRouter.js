import express from 'express';
import { addPrescription, removePrescription } from '../controller/prescriptionController.js';
import multer from 'multer';

const prescriptionRouter = express.Router();
const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
      return cb(null,`${Date.now()}${file.originalname}`);
  }
})

const upload = multer({ storage: storage})


prescriptionRouter.post("/add",upload.single('image'),addPrescription)
prescriptionRouter.post("/remove",removePrescription)

export default prescriptionRouter;