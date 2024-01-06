import multer from "multer";
import { InvalidMimeTypeError } from "../../error/invalid-mimetype-error";
import { Request } from "express";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
  });

  const fileFilter = (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
    if(file.mimetype === "application/pdf"){
      callback(null, true);
    }
    // reject a file
    else{
      callback(new InvalidMimeTypeError("Invalid mimetype"));
    }
  };

  export const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
  });