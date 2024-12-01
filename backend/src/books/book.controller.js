const Book = require("./book.model");



// create
const postABook = async (req, res) => {
    console.log(req.body);
    try {
        const newBook = await Book({...req.body});
        await newBook.save(); // mongo save
        res.status(200).send({message: "create successfully", book: newBook});
    } catch (error) {
        console.error("Error on creating item", error);
        res.status(500).send({message: "Failed to create"});
    }
};



// get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        // const books = await Book.find().sort({ createdAt: -1}); // if need to be sorted by last created
        res.status(200).send(books);
    } catch (error) {
       console.error("Error fetching all books", error); 
       res.status(500).send({message: "Failed to fetching all books"});
    }
};


// get selected one book
const getSingleBook = async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if (!book) { // check if book is exist
            res.status(404).send({message: "Book not found!"})
        }
        res.status(200).send(book);

    } catch (error) {
        console.error("Error fetching book", error);
        res.status(500).send({message: "Failed to fetch book"})
    }
};



// update book
const updateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const updateBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if (!updateBook) { // check for missing book
            res.status(404).send({message: "Book is not Found!"})
        }
        res.status(200).send({message: "Book is updated successfully!",  book: updateBook});

    } catch (error) {
        console.error("Error updating a book", error);
        res.status(500).send({message: "Failed to update the book"});
    }
};



// remove book
const deleteBook = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteBook = await Book.findByIdAndDelete(id);
        if (!deleteBook){
            res.status(404).send({message: "Book is not found!"});
        }
        res.status(200).send({
            message: "Book is deleted successfully",
            book: deleteBook
        });

    } catch (error) {
        console.error("Error deleting a book", error);
        res.status(500).send({message: "Failed to delete a book"});
    }
}




module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};