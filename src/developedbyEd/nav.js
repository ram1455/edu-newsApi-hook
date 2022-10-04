import React, { useContext } from "react";
import { MovieContext } from "./movieContext";

const Nav = ()=> {
    const [movies,setMovies] = useContext(MovieContext);
    return(
        <div>
            <h3>
                Ram MovieList : {movies.length}
            </h3>
        </div>
    )
}
export default Nav