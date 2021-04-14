import React, { useEffect, useState } from 'react';
import ArtistModel from '../models/artists';
import { Card, Icon, Image, Button, Form, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function Artists() {
    const [ artists, setArtists] = useState("")
    /* modal for create new artist */
    const [open, setOpen] = useState(false)
    /* create new artist data body*/
    const [ nameOfArtist, setNameOfArtist] = useState("")
    const [ artistBio, setArtistBio] = useState("")
    const [ artistImage, setArtistImage ] = useState("")
 
    useEffect(() => {
        fetchArtistData();
    }, [])

    const fetchArtistData = () => {
        ArtistModel.allArtists().then(json => {
            setArtists(json)
        })
    }

   function handleArtistCreate(event) {
       event.preventDefault();
       ArtistModel.createArtist({ name_of_artist: nameOfArtist, bio: artistBio, artist_image: artistImage}).then(json => {
        if (json.status === 201) {
            console.log("success at creating new artist", json);
          } else {
            console.log("there was an error, data sent:", json);
          }
        });
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

        {/* create new artist modal */}
        <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button>Create Artist</Button>}
    >
        <Modal.Header> Create Artist
        <Button circular icon='close' floated='right' onClick={() => setOpen(false)}>  
        </Button>
        </Modal.Header>
        <Modal.Content>
        <Form>
        <Form.Group widths='equal'>
        </Form.Group>
        <Form.Group inline>
        <Form.Field>
        <label>Artist Name</label>
        <input type ="text"  placeholder='Artist Name Here' value={ nameOfArtist }  onChange={(e) => setNameOfArtist(e.target.value)}/>
        </Form.Field>
          
        </Form.Group>
        <Form.TextArea label='Artist Bio' type ="text" style={{ minHeight: 100, maxHeight: 500 }} placeholder='Describe Your Artist Here' value={ artistBio }  onChange={(e) => setArtistBio(e.target.value)}/>
        <Form.Field>
        <label>Artist Image (url)</label>
        <input placeholder='Choose An Image For Your Artist' type ="text"  value={ artistImage } onChange={(e) => setArtistImage(e.target.value)} />
        </Form.Field>
      
      </Form>
        </Modal.Content>
        <Modal.Actions>
        
        <Button type='submit' value="submit" onClick={(event) => {setOpen(false); handleArtistCreate(event)}}>

        Post
      </Button>

        </Modal.Actions>
      </Modal>

      {/* END SECTION FOR CREATE ARTIST */}




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