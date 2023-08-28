import { Router } from "express";
import ConfigControllers from "../controllers/configControllers";

const calcRoutes = Router();

// calcRoutes.get('/api/config/system/regExp', ConfigControllers);
calcRoutes.get('/api/config/:w+/*', ConfigControllers.sendFrontConfigByFile);
calcRoutes.get('/api/config/', ConfigControllers.sendFrontConfig);

export default calcRoutes;