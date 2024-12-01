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


module.exports = router;