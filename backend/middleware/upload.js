import multer from "multer";

const maxFileSize = 15000000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/books");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype == "application/pdf") {
      cb(null, true);
    } else {
      console.log("Please insert PDF file!");
      cb(null, false);
    }
  },
  limits: { fieldSize: maxFileSize },
});

export default upload;