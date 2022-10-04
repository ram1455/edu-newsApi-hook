import React, { useState } from "react";
import styled from "styled-components";
import Card from "./komponen/card";
import Search from "./komponen/Search";

const Kontainer = styled.div`
margin: 0px auto;
display: block;
width : 950px;
background-color:lightgrey;
`
const Index = ()=> {
    let [nav, setNav] = useState('Trending');

    console.log(nav);
    return(
    <Kontainer>
        
        <Search setNav={setNav}/>
        <Card nav={nav}/>
    </Kontainer>

    )
}

export default Index