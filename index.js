// Imports
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import MovieRouter from "./routers/movieRouter.js";

//config vars
const port = process.env.port || 4000;
const db   = process.env.DB   || 'mongodb://127.0.0.1';

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
app.use(cors());

//Montar Routers



app.use("/", MovieRouter);