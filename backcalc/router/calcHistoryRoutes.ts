import { Router } from "express";
import calcHistoryController from "../controllers/calcHistoryController";

const calcHistoryRoutes = Router();

calcHistoryRoutes.get('/api/history', calcHistoryController.list);


// calcHistoryRoutes.get('/api/history/:from', calcHistoryController.getFromTo);
// calcHistoryRoutes.get('/api/history/:from-:to', calcHistoryController.getFromTo);

export default calcHistoryRoutes;