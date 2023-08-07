const express = require('express');
const router = express.Router();
const Movie= require("../models/movie.models")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));




router.get("/movies", (req,res,next)=>{
Movie.find()
.select("title image")
.then((Movie)=>{
console.log(Movie)
res.render("todasMovies.hbs",{
 nameMovies:Movie   
})

})
.catch((error)=>{
   next(error)
})
   
})
router.get("/movies/:MovieId", (req, res, next)=>{
    
    let MovieId=req.params.MovieId
    Movie.findById(MovieId)
    .then((response)=>{
res.render("cadaMovie.hbs",{movie:response})
    })
    .catch((error)=>{
next(error)
    })
    
}) 

module.exports = router;
