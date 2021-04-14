import React, { useEffect, useState } from 'react';
import AlbumModel from '../models/albums';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


function Albums() {
    const [ albums, setAlbums] = useState()


    useEffect(() => {
        fetchAlbumData();
    }, [])

    const fetchAlbumData = () => {
        AlbumModel.allAlbums().then(json => {
            setAlbums(json)
        })
    }

    /* SECTION: testing */
    /* log the return of fetch */
    console.log(albums)

    const deleteAlbum = () => {
        console.log("album deleted")
    }

    const seeAlbumSongs = () => {
        console.log("show Songs in Album")
    }



    return ( 
        <>
        <h1 style={{textAlign: "center"}}>Albums </h1> 
        <div className="mainCardContainer">


        { albums ? albums.map((album, index) => {
   return  <> 
            <Card className="mainCardItems">
                <Image src={album.album_image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{album.title}</Card.Header>
                
                <Card.Description>
                    {album.nameOfArtist}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                
                    <Icon name="eye" onClick={seeAlbumSongs}/>
                    <Link to={`/albums/${album.id}`}>
                    <Icon name="music"/>
                    </Link>
                    <Icon name="thumbs down" onClick={deleteAlbum}/>
                  
                
                
                </Card.Content>
            </Card>
   
   
   
   
    </> }) : <h1 className="errorNewsPost"> There seems to be an error! <br/> We'll be right with you </h1> } 
  </div>
        </>
    )
}

export default Albums