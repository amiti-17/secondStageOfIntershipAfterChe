import { Request, Response } from "express";
import statusCode from "../configBack/statusCode";
import path from "path";
import dirName from "../configBack/dirName";

export default function failRequest (req: Request, res: Response) {
    res.status(statusCode[404]);
  
    if (req.accepts('html')) {
      res.sendFile( path.resolve(dirName.static, dirName["404page"], dirName.indexHtml) );
      return;
    }
  }