// Imports
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import MovieRouter from "./routers/movieRouter.js";
import dotenv from "dotenv"
import path from "node:path"


//config vars
const port = process.env.port || 4000;
const db   = process.env.DB   || 'mongodb://127.0.0.1/test';

//Instanciar servidor http y db

const app = express()
app.listen(port,() =>{
    console.log("Server andando en " + port);
})

mongoose.connect(db,() => {
    console.log("BASE DE DATOS ANDANDO " + db);
})

// Activar JSON y morgan


app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/uploads/:path', (req, res) => {
  console.log(path.resolve("./uploads/" + req.params.path));
  res.sendFile(path.resolve("./uploads/" + req.params.path))
})

app.use("/", MovieRouter);