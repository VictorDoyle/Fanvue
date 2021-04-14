import React, { useEffect, useState } from 'react';
import GenreModel from '../models/genres';

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

    return ( 
        <>
        <h1>GENRES </h1> 
        </>
    )
}

export default Genres