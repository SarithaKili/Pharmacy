import express from 'express';
import { addDrug } from '../controller/drugController.js';

const drugRouter = express.Router();

drugRouter.post("/add", addDrug )

export default drugRouter;