import { Response } from "express";
import HttpCodes from "../configBack/HttpCodes";

export default function failResponse(res: Response, message?: string, resCode?: number) {
  resCode = resCode || HttpCodes.INTERNAL_SERVER_ERROR;
  message = message || 'unpredictable server Error';
  res.status(resCode).json(message);
} 

