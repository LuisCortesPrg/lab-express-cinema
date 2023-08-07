const mongoose= require("mongoose")
const movieSchema= new mongoose.Schema({
    title: String,
    director: String,
    star:[String],
    image: String,
    description: String,
    showtimes:[String],
})

const Movies= mongoose.model("Movies", movieSchema)
module.exports= Movies