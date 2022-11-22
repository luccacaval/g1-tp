import express from "express";
import Movie from "../models/MovieModel.js";
import multer from "multer";

const MovieRouter = express.Router()

MovieRouter.use((error, req, res, next) => {
    console.log('This is the rejected field ->', error.field);
  });

  

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
  
  const limits = {
    fileSize: 2 * 1024 * 1024
  };
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png")
      cb(null, true);
    else cb(null, false);
  };
  
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits
  });
  
  

MovieRouter.get('/movies', (req, res) =>{
    Movie.find((err, Movies) => {
        res.status(200).json(Movies);
    })
})

MovieRouter.post('/movies', upload.any("file"),(req, res) =>{
  const Movie1 = Movie(req.body);
  
    Movie1.ImagePath = req.files[0].path;
    console.log(Movie1);
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

MovieRouter.delete('/movies/:id', (req,res) => {
    Movie.findByIdAndDelete(req.params.id,(err, movie) =>{
        if (err) return console.error(err);
        res.status(200).json(movie)
    } )
})

export default MovieRouter;
