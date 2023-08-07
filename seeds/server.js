const mongoose= require("mongoose")
const allMovies= require("./movie.json")
const Movie=require("../models/movie.models.js")

mongoose.connect("mongodb://127.0.0.1:27017/lab-express-cinema")


.then(()=>{
return Movie.insertMany(allMovies)

})
.then(() => {
    console.log("Data inserted successfully.");
})

.catch((error)=>{
    console.log(error)
})

