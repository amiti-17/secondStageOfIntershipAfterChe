import { Router } from "express";
import calcHistoryController from "../controllers/calcHistoryController";

const calcHistoryAllRoutes = Router();

calcHistoryAllRoutes.get('/api/historyAll', calcHistoryController.listAll);

export default calcHistoryAllRoutes;