//require mongoose
const mongoose = require('mongoose');

//connect to a server with err catching
mongoose.connect('mongodb://localhost:27017/movieApp3')
    .then((result) => {
        console.log("connected to movieApp3");
    }).catch((err) => {
        console.log("error");
        console.log(err);
    });

//make a schema

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
  });

//make a model, make it a model class 

const Movie = mongoose.model('Movie', movieSchema);