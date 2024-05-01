import BookModel from "../models/BookModel";

const index = async (req, res) => {
  BookModel.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const show = (req, res) => {
  let bookID = req.body.bookID;
  BookModel.findById(bookID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const store = (req, res) => {
  let book = new BookModel({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  });
  book
    .save()
    .then(() => {
      res.json({
        message: "Book added successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const update = (req, res) => {
  let bookID = req.body.bookID;
  let updatedBook = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  };

  BookModel.findByIdAndUpdate(bookID, { $set: updatedBook })
    .then(() => {
      res.json({
        message: "Book updated successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

const destroy = (req, res) => {
  let bookID = req.body.bookID;
  BookModel.findByIdAndRemove(bookID)
    .then(() => {
      res.json({
        message: "Book removed successfully!",
      });
    })
    .catch((error) => {
      req.json({
        message: error,
      });
    });
};

// eslint-disable-next-line no-undef
module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
