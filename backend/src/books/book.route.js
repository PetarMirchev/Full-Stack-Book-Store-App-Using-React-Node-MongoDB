const express = require('express');
const Book = require('./book.model');
const router = express.Router();

//post a book / add new
//app.use("/api/books", bookRoutes === /create-book);
router.post("/create-book", async (req, res) => {
    console.log(req.body);
    try {
        const newBook = await Book({...req.body});
        await newBook.save(); // mongo save
        res.status(200).send({message: "create successfully", book: newBook});
    } catch (error) {
        console.error("Error on creating item", error);
        res.status(500).send({message: "Failed to create"});
    }
});


// get all books



module.exports = router;