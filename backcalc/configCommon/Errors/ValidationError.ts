import CustomError from ".";
import HttpCodes from "../../configBack/HttpCodes";
import errorMsg from "./errorMsg";

export default class ValidationError extends CustomError {
  httpCode: number;
  constructor(message: string) {
    super(errorMsg.validationError + message);
    this.httpCode = HttpCodes.UNPROCESSABLE_ENTITY;
  }
}