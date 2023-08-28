import calcController from "../controllers/calcController";
import { Router } from "express";
import calcValidator from "../validators/calcValidator";

const calcRoutes = Router();

calcRoutes.put('/api/calc', calcValidator, calcController.calculateExpression);

export default calcRoutes;