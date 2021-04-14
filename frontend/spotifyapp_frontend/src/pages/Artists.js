import React, { useEffect, useState } from 'react';
import ArtistModel from '../models/artists';

function Artists() {
    const [ artists, setArtists] = useState()

    useEffect(() => {
        fetchArtistData();
    }, [])

    const fetchArtistData = () => {
        ArtistModel.allArtists().then(json => {
            setArtists(json)
        })
    }

   /* SECTION: testing */
    /* log the return of fetch */
    console.log(artists)

  /*   let artistList = artists.map((artist) => {
        return <>

        </>
    }) */




    return ( 
        <>
        <h1>Artists </h1> 
        </>
    )
}

export default Artists