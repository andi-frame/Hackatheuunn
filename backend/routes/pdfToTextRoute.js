import Express from "express";
import { convertPdfToText } from "../utils/pdfToTextOCR.js";
import { convertTextToAudio } from "../utils/textToAudio.js";

const router = Express.Router();

router.post("/pdftotext", async (req, res) => {
  try {
    const text = await convertPdfToText("./books/buku-ilustrasi-anak_lumba-lumba.pdf");
    await convertTextToAudio(text);
    res.send(text);
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
