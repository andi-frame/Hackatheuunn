import Express from "express";
import { transcribeAudio } from "../utils/audioToText.js";

const router = new Express();

router.get("/audiototext", async (req, res) => {
  const transcription = await transcribeAudio("./tempAudio.mp3");
  res.send(transcription);
});

export default router;
