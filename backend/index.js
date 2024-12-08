const express = require('express');
const app = express();
require('dotenv').config();
const port = 3001; // process.env.PORT || 3001

const mongoose = require('mongoose');
require('dotenv').config();
// Import the cors module in your Express
const cors = require('cors');







// Use CORS middleware -- fix error
// app.use(cors());
app.use(cors({
  origin: ['http://localhost:5173', 'https://book-app-frontend.com'],
  credentials: true
}))


// middlewares
app.use(express.json());


// routes
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);


 
const ConnectDB = async () => {
    try {
        //await mongoose.connect(process.env.MONGO_DB_KEY);
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("MongoDB acc & pass OK!");
    } catch (error) {
        console.log(error);
        
        throw error;
    }   
  }
ConnectDB();


mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});
mongoose.connection.on('error', err => {
  logError(err);
}); 
mongoose.connection.on("disconnect", () => {
  console.log("ERROR connect or reconnect to MongoDB!");
});
   

app.listen(port, () => {
  console.log(`App backend listening on http://localhost:${port}/`)
})

  //routes
  app.get('/', (req, res) => {
    res.send('Hello from BackEnd!')
  });


