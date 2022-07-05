import { Router } from "express";
import { getFinancialEvent, getFinancialEventSum, postFinancialEvent } from "../Controllers/financialController.js";

const financialRouter = Router();

financialRouter.post("/financial-events", postFinancialEvent)
financialRouter.get("/financial-events", getFinancialEvent)
financialRouter.get("/financial-events/sum", getFinancialEventSum)

export default financialRouter;