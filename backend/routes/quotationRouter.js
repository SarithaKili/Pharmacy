import express from 'express';
import { createQuotation } from '../controller/quotationController';

const quotationRouter = express.Router();

quotationRouter.post("/create",createQuotation);


export default quotationRouter;