const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const router = express.Router();




//! frontend => backend server => controller => book schema => database => send data to server => back to frontend

//post a book / add new  ---- http://localhost:3001/api/books/create-book
//app.use("/api/books", bookRoutes === /create-book);  // in index.js
router.post("/create-book", postABook);
// get all books  -- http://localhost:3001/api/books/
router.get("/", getAllBooks);
// single book endpoint ---- http://localhost:3001/api/books/330493u8y394984
router.get("/:id", getSingleBook);
// update a book endpoint ---- http://localhost:3001/api/books/edit/674c5accc8715b2c94883972
router.put("/edit/:id", updateBook);
// delete a book endpoint  ---  http://localhost:3001/api/books/674c5accc8715b2c94883972
router.delete("/:id", deleteBook);




module.exports = router;