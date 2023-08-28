import { Response } from "express";
import statusCode from "../configBack/statusCode";
import HttpCodes from "../configBack/HttpCodes";

export default function successResponse<T>(res: Response, data: T, resCode?: number) {
  resCode = resCode || HttpCodes.OK;
  res.status(resCode).json(data);
}