import mongoose from "mongoose";

const CalifSchema = new mongoose.Schema({
    Calif : Number
},{ _id: false })

const MovieSchema = new mongoose.Schema({
    "Name" :{"type" : String, "required" : true},
    "Type" : {"type" : String, "required" : true},
    "Gender" : {"type" : String, "required" : true},
    "Sinopsis" : {"type" : String, "required" : true},
    "Califs" : {"type" : Number, "required" : true}
})

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;