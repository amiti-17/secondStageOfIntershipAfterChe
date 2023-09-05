import { Response } from "express";
import HttpCodes from "../configBack/HttpCodes";

export default function failResponse(res: Response, message?: string, resCode?: number) {
  message = message || 'unpredictable server Error';
  resCode = resCode || HttpCodes.INTERNAL_SERVER_ERROR;
  res.status(resCode).json(message);
} 

