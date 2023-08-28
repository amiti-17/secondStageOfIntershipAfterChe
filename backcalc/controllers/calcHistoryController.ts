import { Request, Response } from "express";
import successResponse from "../myResponse/successResponse.js";
import failResponse from "../myResponse/failResponse.js";
import errorMsg from "../configCommon/Errors/errorMsg.js";
import dbAPI from "../database/dbAPI.js";

const calcHistoryController = {
  listAll: async (req: Request, res: Response) => {
    // dbAPI.chooseBdAPI();
    try {
      const myHistory = await dbAPI.dataBase.listAll();
      console.log(myHistory)
      successResponse(res, myHistory);
    } catch (error) {
      console.error("some went wrong with db. " + (error instanceof Error ? error.message : ""));
      failResponse(res, errorMsg.database);
    }
  },

  list: async function (req: Request, res: Response) {
    // dbAPI.chooseBdAPI();
    console.log("query: ", req.query);
      console.log("hear",dbAPI.dataBase.listAll())
    try {
      const myHistory = await dbAPI.dataBase.list(Number(req.query.offset), Number(req.query.limit));
      console.log(myHistory)
      successResponse(res, myHistory);
    } catch (error) {
      console.error("some went wrong with db. " + (error instanceof Error ? error.message : ""));
      failResponse(res, errorMsg.database);
    }
  }
};

export default calcHistoryController;
