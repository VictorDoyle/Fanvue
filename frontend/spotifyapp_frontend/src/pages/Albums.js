import React, { useEffect, useState } from 'react';
import AlbumModel from '../models/albums';
import { Card, Image, Modal, Icon, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


function Albums() {
    const [ albums, setAlbums] = useState()
   /* modal for create new album */
   const [open, setOpen] = useState(false)
   /* create new album data body*/
   const [ albumTitle, setAlbumTitle] = useState("")
   const [ nameOfArtist, setNameOfArtist] = useState("")
   const [ albumImage, setAlbumImage ] = useState("")


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

    function handleAlbumCreate(event) {
        event.preventDefault();
        AlbumModel.createAlbum({ title: albumTitle, /* nameOfArtist: nameOfArtist, */ album_image: albumImage}).then(json => {
         if (json.status === 201) {
             console.log("success at creating new artist", json);
           } else {
             console.log("there was an error, data sent:", json);
           }
         });
    }

    const deleteAlbum = () => {
        console.log("album deleted")
    }

    const seeAlbumSongs = () => {
        console.log("show Songs in Album")
    }



    return ( 
        <>
        <h1 style={{textAlign: "center"}}>Albums </h1> 

        {/* SECTION: create new album */}


      <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button>Create New Album</Button>}
    >
        <Modal.Header> Create Album 
        <Button circular icon='close' floated='right' onClick={() => setOpen(false)}>  
        </Button>
        </Modal.Header>
        <Modal.Content>
        <Form>
        <Form.Group widths='equal'>
        </Form.Group>
        <Form.Group inline>
        <Form.Field>
        <label>Album Name</label>
        <input type ="text"  placeholder='Album Name Here' value={ albumTitle }  onChange={(e) => setAlbumTitle(e.target.value)}/>
        </Form.Field>
          
        </Form.Group>
       {/*  <Form.TextArea label='Album Artist' type ="text" style={{ minHeight: 100, maxHeight: 500 }} placeholder='Which Artist Made This Album?' value={ nameOfArtist }  onChange={(e) => setNameOfArtist(e.target.value)}/> */}
        <Form.Field>
        <label>Album Image (url)</label>
        <input placeholder='Choose An Image For Your Album' type ="text"  value={ albumImage } onChange={(e) => setAlbumImage(e.target.value)} />
        </Form.Field>
      
      </Form>
        </Modal.Content>
        <Modal.Actions>
        
        <Button type='submit' value="submit" onClick={(event) => {setOpen(false); handleAlbumCreate(event)}}>

        Post
      </Button>

        </Modal.Actions>
      </Modal>
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