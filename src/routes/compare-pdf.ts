import express from "express";
import { ROUTES } from "../constants/routes";
import fs from "fs";
import { upload } from "../helpers/multer";
import { comparePDFs } from "../helpers/pdf-compare";
import { getUploadedFilePath } from "../helpers/common";
import { InvalidFileQuantityError } from "../error/invalid-file-quantity";

const router = express.Router();

router.post(
    ROUTES.comparePDF,
    upload.array("pdfFiles", 2),
    async function (req, res) {
  
      const files: { [fieldname: string]: Express.Multer.File[]; } | Express.Multer.File[] = req.files;
  
      const pdfFiles = files;
  
      if (!pdfFiles || pdfFiles.length !== 2) {
        throw new InvalidFileQuantityError();
      }
  
      const [pdfFile1, pdfFile2]: any = pdfFiles;
  
      const pdfPath1 = getUploadedFilePath(pdfFile1.filename);
      const pdfPath2 = getUploadedFilePath(pdfFile2.filename);
  
      const result = await comparePDFs(pdfPath1, pdfPath2);
      console.log(result);
      res.json(result);
  
      // Delete the files in the finally block to ensure it happens regardless of success or failure
      if (pdfPath1) {
        fs.unlinkSync(pdfPath1);
      }
      if (pdfPath2) {
        fs.unlinkSync(pdfPath2);
      }
    }
  );
  

export { router as pdfCompareRoute };
