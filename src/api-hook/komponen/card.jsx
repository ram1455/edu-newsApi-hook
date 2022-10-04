import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Kard = styled.div`
    width:220px;
    height:auto;
    background-color:white;
    margin:20px 5px 1px 5px;
    border-radius:15px;
    box-sizing:border-box;
    word-wrap:break-word;
    
`
const Kontainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:5px;
`
const Kimg = styled.img`
    width:100%;
    height:auto;
    border-top-left-radius :15px;
    border-top-right-radius :15px;
`
const CardBody = styled.div`
    padding:10px 10px;
`
const Kh5 = styled.h5`
opacity:50%;
`

const Card = ({nav})=> {
    let [card, setCard] = useState([]);
    useEffect( () => {
        return () => {
            fetch(`https://newsapi.org/v2/everything?q=${nav}&from=2022-10-03&sortBy=popularity&apiKey=8e43ceee3eb84a2aa9ccce147385e73c`)
            .then( resp => resp.json())
            .then( res  => setCard(res.articles))
      }
    },[nav])

    return(
        <Kontainer>
        {
            card.map( (article) => (
            <Kard key={Math.random() * 1000}>
                <Kimg src={article.urlToImage} alt='img error' />
                <CardBody>
                    <Kh5>{article.author}</Kh5>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                </CardBody>
            </Kard>
            ))
        }
        </Kontainer>
    )
}

export default Card