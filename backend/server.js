import Express from "express";
import bodyParser from "body-parser";
import PDFImage from "pdf-image";
import "dotenv/config";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";

const app = Express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(MONGODB_URI);

app.get("/pdftoimage/:fileName/:pageNumber", function (req, res) {
  var fileName = req.params.fileName;
  var pdfPath = `/`;
  var pageNumber = req.params.pageNumber;

  var pdfImage = new PDFImage(pdfPath);

  pdfImage.convertPage(pageNumber).then(
    function (imagePath) {
      res.sendFile(imagePath);
    },
    function (err) {
      res.send(err, 500);
    }
  );
});

app.use("/api/book", bookRoutes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
