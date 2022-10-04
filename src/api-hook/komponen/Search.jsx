import React, { useState } from "react";
import styled from "styled-components";

const TheForm = styled.form`
    display:flex;
    justify-content:center;
    padding:10px;
`

const TheButton = styled.button`
border: 2px grey solid;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color:white;
    padding:5px;
    &:hover {
        background-color:grey;
        color:white;
    }
`
const TheInput = styled.input`
    width:600px;
    height:30px;
    border: 2px grey solid;
    border-right:0px;
    border-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding:3px 8px;
`

const Search = ({setNav}) => {
    let [input,setInput] = useState('')
    
    const handleInput = (event) => {
         setInput ( () => event.target.value)
    }   

    const handleClick = (event)=>{
        event.preventDefault();
        setNav(input)
    }
    return(
        <div>
            <TheForm onSubmit={handleClick}>
                <TheInput type="text" placeholder="search articles" onChange={handleInput}/>
                <TheButton>search</TheButton>
            </TheForm>
        </div>
    )
}

export default Search;

