import react, {useState, useEffect} from 'react';
import ratemovie from "./ratemovie.js"{
    const movielist= ['The Notebook','Hunger Games', 'Bride Wars', ]
     const[movies,setmovies]= useState();

    const movie= event.target.value;
    setSelectedmovie={movielist};
    return(
    <select value={selectedmovie} onChange={handleChange}>
    {movies.map(moviename=> (
       <option key ={moviename}  value={moviename}>{movie.title}</option>
    ))};
    </select>

    );
};
    export default movieselector;
       


    


