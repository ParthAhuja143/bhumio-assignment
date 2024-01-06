import express from "express";
import 'express-async-errors';
import { pdfCompareRoute } from "./routes/compare-pdf";
import { NotFoundError } from "./error/not-found-error";
import { errorHandler } from "./middlewares/error-handler";
import { json } from "body-parser";

const app = express();

app.use(json());

// Serve uploaded files statically
app.use("/uploads", express.static("uploads"));

// Routes
app.use(pdfCompareRoute);

// Invalid routes
app.all("*", async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export {app};
