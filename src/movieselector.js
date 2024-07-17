import react, {useState, useEffect} from 'react';

    const movielist= ['The Notebook','Hunger Games', 'Bride Wars', ]
     const[movies,setmovies]= useState();

    const select=(movie) =>{
    const moviename= event.target.value;
    setSelectedmovie={movielist};
    return(
    <select value={selectedmovie} onChange={handleChange}>
    {movies.map(moviename=> (
       <option value ={moviename}>{movie.title}</option>
    ))};
    </select>
    
    );
};

    export default movieselector;
       


    


