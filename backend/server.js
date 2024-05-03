import Express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import pdfToTextRoute from "./routes/pdfToTextRoute.js";

const app = Express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/book", bookRoutes);

app.use("/api", pdfToTextRoute);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
