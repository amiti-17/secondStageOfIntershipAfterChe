import { Request, Response } from "express";
import calculateExp from "../calcFuncs/index.js";
import { matchedData, validationResult } from "express-validator";
import successResponse from "../myResponse/successResponse.js";
import failResponse from "../myResponse/failResponse.js";
import CustomError from "../configCommon/Errors/index.js";

const calcController = {
  calculateExpression: async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const data = matchedData(req);
      // console.log(data);
      try {
        const newValue = await calculateExp(data.exp);
        let someData = { calc: req.body.exp, result: newValue };
        successResponse(res, someData);
      } catch (error) {
        if (error instanceof CustomError) {
          failResponse(res, error.message);
        }
      }
    } else {
      failResponse(res);
    }
  },
};

export default calcController;
