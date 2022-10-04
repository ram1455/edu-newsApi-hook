import React from "react";
import styled from "styled-components";

const Kontainer = styled.div`
background-color:dodgerblue;
width:auto;
height:40px;
display:block;
padding:2px 0px;
padding-left:225px;
color:white;
`

const Head = ()=>{
    return(
        <Kontainer>
            <h2>NEWS API</h2>
        </Kontainer>
    )
}

export default Head;