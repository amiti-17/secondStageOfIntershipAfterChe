import { Request, Response } from "express";
import statusCode from "../configBack/statusCode.js";
import CustomError from "../configCommon/Errors/index.js";
import errorMsg from "../configCommon/Errors/errorMsg.js";
import successResponse from "../myResponse/successResponse.js";
import frontConfig from "../configCommon/frontConfig.js";

const ConfigControllers = {

  sendFrontConfigByFile: (req: Request, res: Response) => {
    console.log('regexp was send');
    const currentPath = req.originalUrl.match(/(?<=config)\/.+/);
    if (currentPath === null) throw new CustomError(errorMsg.possiblyNull);
    const serverData = require("../configCommon" + currentPath[0]);
    console.log(serverData.default);
    successResponse(res, serverData.default);
  },

  sendFrontConfig: (req: Request, res: Response) => {
    // console.log(frontConfig);
    successResponse(res, frontConfig);
  }

}


export default ConfigControllers;