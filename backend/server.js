import Express from "express";
import PDFImage from "pdf-image";

const app = Express();

app.get("/pdftoimage/:path/:pageNumber", function (req, res) {
  var pdfPath = req.params.path;
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

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
