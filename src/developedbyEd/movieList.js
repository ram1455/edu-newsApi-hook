import React, { useContext, useState } from "react";
import { MovieContext } from "./movieContext";
import MovieData from "./movieData";

const MovieList = () => {
const [movies,setMovies] = useContext(MovieContext);
    return(
        <div>
            { movies.map(movie => (
                <MovieData key={movie.id} name={movie.name}/> 
            )) }
        </div>
    )
}

export default MovieList;