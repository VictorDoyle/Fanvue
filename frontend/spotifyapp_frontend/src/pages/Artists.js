import React, { useEffect, useState } from 'react';
import ArtistModel from '../models/artists';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function Artists() {
    const [ artists, setArtists] = useState("")

    useEffect(() => {
        fetchArtistData();
    }, [])

    const fetchArtistData = () => {
        ArtistModel.allArtists().then(json => {
            setArtists(json)
        })
    }

    const deleteArtist = () => {
        console.log("artist deleted")
    }

    const seeArtist = () => {
        console.log("show Artist Page")
    }

   /* SECTION: testing */
    /* log the return of fetch */
    console.log(artists)





    return ( 
        <>
        
        <h1 style={{textAlign: "center"}}>Your Artists </h1> 
        <div className="mainCardContainer">

       

        { artists.length > 0 ? artists.map((artist, index) => {
   return  <> 
            <Card className="mainCardItems">
                <Image src={artist.artist_image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{artist.name_of_artist}</Card.Header>
                
                <Card.Description>
                    {artist.bio}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                
                    <Icon name="eye" onClick={seeArtist}/>
                    <Link to={`/albums/${artist.id}`}>
                    <Icon name="music"/>
                    </Link>
                    <Icon name="thumbs down" onClick={deleteArtist}/>
                  
                
                
                </Card.Content>
            </Card>
   
   
   
   
    </> }) : <h1 className="errorNewsPost"> There seems to be an error! <br/> We'll be right with you </h1> } 
  
    </div>
        </>
    )
}

export default Artists