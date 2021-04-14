import React, { useEffect, useState } from 'react';
import GenreModel from '../models/genres';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
/* styles */
import '../styles/CardContainer/CardContainer.css'
function Genres() {
    const [ genres, setGenres] = useState()


    useEffect(() => {
        fetchAlbumData();
    }, [])

    const fetchAlbumData = () => {
        GenreModel.allGenres().then(json => {
            setGenres(json)
        })
    }

    /* SECTION: testing */
    /* log the return of fetch */
    console.log(genres, "genres fetched")

    const seeGenre = () => {
        console.log("redirect to Genre Show Page")
    }

    return ( 
        <>
        <h1 style={{textAlign: "center"}}>GENRES </h1> 
        <div className="mainCardContainer">

        { genres ? genres.map((genre, index) => {
   return  <> 
            <Card className="mainCardItems">
                {/* <Image src={genre.genre_image} wrapped ui={false} /> */}
                <Card.Content>
                <Card.Header>{genre.title}</Card.Header>
                
                <Card.Description>
                    {genre.description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                
                    <Icon name="eye" onClick={seeGenre}/>
                  
                  
                
                
                </Card.Content>
            </Card>
   
   
   
   
    </> }) : <h1 className="errorNewsPost"> There seems to be an error! <br/> We'll be right with you </h1> } 
  
        </div>
        </>
    )
}

export default Genres