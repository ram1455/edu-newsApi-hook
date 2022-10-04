import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props)=>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '10K',
            id: 23124
        },
        {
            name: 'Gurame Potter',
            price: '10K',
            id: 41225
        },
        {
            name: 'Harry Ramzeuku',
            price: '10K',
            id: 63526
        }
    ])
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}