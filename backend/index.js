const express = require('express');
const app = express();

const port = 3001; // process.env.PORT || 3000

const mongoose = require('mongoose');


//Import the cors module in your Express
const cors = require('cors');
// Use CORS middleware
app.use(cors());



async function main() {
    try {
        //await mongoose.connect(process.env.MONGO_DB_KEY);
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("MongoDB acc & pass OK!");
    } catch (error) {
        throw error;
    }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
   
   
    //routes
    app.get('/', (req, res) => {
      res.send('Hello 11111!')
    });
}

main().then(() => console.log("Mongo DB connected!")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`App backend listening on http://localhost:${port}/`)
})