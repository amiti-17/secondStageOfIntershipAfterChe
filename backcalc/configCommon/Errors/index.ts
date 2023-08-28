export default class CustomError extends Error {
  // cause: any;
  // fileName: string;
  // columnNumber: number;
  // lineNumber: number;
  constructor(message: string /*, {cause, stack, fileName, columnNumber, lineNumber} */) {
    // const {cause: any, fileName: string, columnNumber: number, lineNumber: number} = new Error(message);
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    
    this.name = 'customError';
    // this.cause = cause;
    // this.stack = stack;
    // this.fileName = fileName;
    // this.columnNumber = columnNumber;
    // this.lineNumber = lineNumber
  }
}