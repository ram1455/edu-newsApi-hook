import React, { useState } from "react";

const MovieData = ({id, name}) => {
    
    return(
           <h3 key={id}>{name}</h3>
    )
}

export default MovieData;