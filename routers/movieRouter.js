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

export default MovieRouter;