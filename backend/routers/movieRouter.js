import express from "express";
import Movie from "../models/MovieModel.js";

const MovieRouter = express.Router()

MovieRouter.get('/movies', (req, res) =>{
    Movie.find((err, Movies) => {
        res.status(200).json(Movies);
    })
})

MovieRouter.post('/movies', (req, res) =>{
    const Movie1 = Movie(req.body)
    console.log(req.body);
    Movie1.save((err, Movie1) => {
        res.status(201).json(Movie1);
    })
})

MovieRouter.put('/movies/:id', (req,res) => {
    Movie.findByIdAndUpdate(req.params.id, { Califs: req.body }).exec((err, movie) => {
        console.log(req.body)
        if (err) return console.error(err);
        res.status(200).json(movie)
    })
})


export default MovieRouter;