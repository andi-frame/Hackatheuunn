import Express from "express";
import BookController from "../controllers/bookController.js";

const router = Express.Router();

router.get("/", BookController.index);
router.post("/show", BookController.show);
router.post("/store", BookController.store);
router.post("/update", BookController.update);
router.post("/delete", BookController.destroy);

export default router;
