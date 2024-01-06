import { CustomError } from "./custom-error";

export class InvalidMimeTypeError extends CustomError{
    statusCode = 400;

    constructor(message: string){
    super(message);

    Object.setPrototypeOf(this, InvalidMimeTypeError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}