import React, { useEffect, useState } from 'react';
import GenreModel from '../models/genres';
import { Card, Icon, Modal, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
/* styles */
import '../styles/CardContainer/CardContainer.css'
function Genres() {
    const [ genres, setGenres] = useState()
  /* modal for create new genres */
  const [open, setOpen] = useState(false)
  /* create new genres data body*/
  const [ nameOfGenre, setNameOfGenre] = useState("")
  const [ genreDescription, setGenreDescription] = useState("")


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

    /* Add Genre */

   function handleGenreCreate(event) {
    event.preventDefault();
    GenreModel.createGenre({ title: nameOfGenre, description: genreDescription}).then(json => {
     if (json.status === 201) {
         console.log("success at creating new genre", json);
       } else {
         console.log("there was an error, data sent:", json);
       }
     });
}

    function handleGenreDelete(event) {
        event.preventDefault();
        GenreModel.deleteGenre({ title: nameOfGenre, description: genreDescription}).then(json => {
            if (json.status === 201) {
                console.log("success at deleting genre", json);
              } else {
                console.log("there was an error, data sent:", json);
              }
            });
    }

    const seeGenre = () => {
        console.log("redirect to Genre Show Page")
    }

    return ( 
        <>
        <h1 style={{textAlign: "center"}}>GENRES </h1> 

        {/* create new genre modal */}
        <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button>Add Music Genre</Button>}
    >
        <Modal.Header> Add Genre 
        <Button circular icon='close' floated='right' onClick={() => setOpen(false)}>  
        </Button>
        </Modal.Header>
        <Modal.Content>
        <Form>
        <Form.Group widths='equal'>
        </Form.Group>
        <Form.Group inline>
        <Form.Field>
        <label>Genre Title</label>
        <input type ="text"  placeholder='Genre Name Here' value={ nameOfGenre }  onChange={(e) => setNameOfGenre(e.target.value)}/>
        </Form.Field>
          
        </Form.Group>
        <Form.TextArea label='Genre Description' type ="text" style={{ minHeight: 100, maxHeight: 500 }} placeholder='Describe The Genre Here' value={ genreDescription }  onChange={(e) => setGenreDescription(e.target.value)}/>
     
      
      </Form>
        </Modal.Content>
        <Modal.Actions>
        
        <Button type='submit' value="submit" onClick={(event) => {setOpen(false); handleGenreCreate(event)}}>

        Post
      </Button>

        </Modal.Actions>
      </Modal>

      {/* END SECTION FOR CREATE ARTIST */}

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
                    <Icon name="cancel" onClick={(event) => {handleGenreDelete(event)}}/>
                  
                  
                
                
                </Card.Content>
            </Card>
   
   
   
   
    </> }) : <h1 className="errorNewsPost"> There seems to be an error! <br/> We'll be right with you </h1> } 
  
        </div>
        </>
    )
}

export default Genres