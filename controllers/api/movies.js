var Movie = require('../../models/movie');
var Performer = require('../../models/performer');

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteMovie, 
};

async function index(req, res) {
  const movies = await Movie.find({});
  res.status(200).json[movies];}

async function show(req, res) {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie)
}


async function create(req, res) {
const newMovie = await Movie.create(req.body);
res.status(201).json(newMovie);
}

async function update(req, res) {
   const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
   res.status(200).json(updatedMovie);
    }

async function deleteMovie(req, res){
     await Movie.findByIdAndRemove(req.params.id)
    res.status(200).json()
}
 
