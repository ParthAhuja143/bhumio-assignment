import PDFParser from "pdf-parse";
import fs from "fs";
import { ComparingPDFError } from "../../error/error-comparing-pdf-error";
import { IDiffLine, IResComparePDF } from "../../iterfaces/response";

export function findDifference(text1: string, text2: string): IDiffLine[] {
  const lines1 = text1.split("\n");
  const lines2 = text2.split("\n");
  const maxLength = Math.max(lines1.length, lines2.length);
  const diffLines: IDiffLine[] = [];

  for (let i = 0; i < maxLength; i++) {
    if (lines1[i] && lines2[2] && lines1[i] !== lines2[i]) {
      diffLines.push({
        line: `Line: ${i}`,
        text1: lines1[i] || "",
        text2: lines2[i] || "",
      });
    }
  }

  return diffLines;
}

async function getTextFromPDF(
  filePath: fs.PathOrFileDescriptor
): Promise<string> {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const pdf = await PDFParser(dataBuffer);
    return pdf.text;
  } catch (error) {
    throw new ComparingPDFError("Error Comparing PDF");
  }
}

export async function comparePDFs(
  file1Path: fs.PathOrFileDescriptor,
  file2Path: fs.PathOrFileDescriptor
): Promise<IResComparePDF> {
  try {
    const text1 = await getTextFromPDF(file1Path);
    const text2 = await getTextFromPDF(file2Path);

    if (text1 === text2) {
      return {
        message: "Files are identical",
      };
    } else {
      const diffLines = findDifference(text1, text2);
      return {
        message: "Files are different",
        differences: diffLines,
      };
    }
  } catch (error) {
    throw new ComparingPDFError("Error Comparing PDF");
  }
}
