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
const Kh3 = styled.h3`
`
const Card = ()=> {
    let [card, setCard] = useState([]);
    useEffect( () => {
        return () => {
            fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_vJhw7KTlG6cSigM81f8uSLvK0enV93bILxjFbNDwecnIF0jOv381gfqF2LCZmDqN`)
            .then( resp => resp.json())
            .then( res  => setCard(res))
      }
    },[])

    console.log(card);
    return(
        <Kontainer>
        {
            card.map( (data) => (
            <Kard key={Math.random() * 1000}>
                <Kimg src={data.url} alt='img error' />
                <CardBody>
                    <Kh3>{data.breeds[0].name}</Kh3>
                    <p>{data.breeds[0].description}</p>
                    <br/>
                    <h5>temperament :{data.breeds[0].temperament}</h5>
                </CardBody>
            </Kard>
            ))
        }
        </Kontainer>
    )
}

export default Card