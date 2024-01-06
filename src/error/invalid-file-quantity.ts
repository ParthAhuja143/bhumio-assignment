import { CustomError } from "./custom-error";

export class InvalidFileQuantityError extends CustomError{
    statusCode = 400;

    constructor(){
    super("Please upload only 2 files, with keys as \" pdfFiles \"");

    Object.setPrototypeOf(this, InvalidFileQuantityError.prototype);
  }

  serializeErrors() {
    return [{ message: "Please upload only 2 files, with keys as 'pdfFiles'" }];
  }
}