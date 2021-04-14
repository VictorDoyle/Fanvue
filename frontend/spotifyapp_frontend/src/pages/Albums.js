import React, { useEffect, useState } from 'react';
import AlbumModel from '../models/albums';

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

    return ( 
        <>
        <h1>Albums </h1> 
        </>
    )
}

export default Albums