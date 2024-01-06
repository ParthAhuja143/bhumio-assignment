import { CustomError } from "./custom-error";

export class ComparingPDFError extends CustomError{
    statusCode = 500;

    constructor(message: string){
    super(message);

    Object.setPrototypeOf(this, ComparingPDFError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}