//U05721483
import React, {useState} from 'react'
import RateMovie from './ratemovie'
import MovieSelector from '/movieselector.js'
import UploadButton from '/upload.js'
import "/app.css"
const [selectedMovie, setSelectedMovie]= useState(null);
const setMovie=(moviename) =>
  setSelectedMovie(moviename);
export default App{

  return(
<div className="MovieSelector">
<title>Enhanced Movie Selector</title>
  <MovieSelector onSelectMovie={handleselectedmovie}/>
};


  {selectedMovie && (
  RateMovieButton moviename={selectedMovie.name}

  )};

);