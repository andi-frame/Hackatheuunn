import Express from "express";
import { convertPdfToText } from "../utils/pdfToTextOCR.js";

const router = Express.Router();

router.get("/pdftotext", async (req, res) => {
  try {
    res.send(await convertPdfToText("./books/buku-ilustrasi-anak_lumba-lumba.pdf"));
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
