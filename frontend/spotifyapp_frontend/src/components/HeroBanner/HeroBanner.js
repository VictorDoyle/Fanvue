import React, { useEffect, useState } from 'react';
import '../../styles/HeroBanner/HeroBanner.css'
import BannerCard from '../BannerCard/BannerCard';

function HeroBanner() {
    const [artistCard, setArtistCard ] = useState()
    const [albumCard, setAlbumCard ] = useState()
    const [genreCard, setGenreCard ] = useState()
    
    /* customizable content for BannerCard */

    const setContent = () => {
        setArtistCard(
            {
            heroCardImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/taylor-swift-reputation-1605024142.jpg?crop=0.502xw:1.00xh;0.294xw,0&resize=640:*",
            titleHeader: "Show Artists",
            titleMeta: "Browse Through Your Spotify Artists",
            heroCardDescription: "You'll have Access To Your Favorite Artists based on Your Spotify Streaming Experience",
            heroCardLinkName: "Artists",
            heroCardLink: "/artists",
            heroCardIcon: 'heart',
            heroCardStyle: "artistCard",
            }
        )

        setAlbumCard(
            {
            heroCardImage: "https://media.pitchfork.com/photos/5d3735caa82ddc000869a630/1:1/w_600/TaylorSwift_Red.jpg",
            titleHeader: "Show Albums",
            titleMeta: "Browse Through Your Spotify Albums",
            heroCardDescription: "You'll have Access To Your Favorite Albums based on Your Spotify Streaming Experience",
            heroCardLinkName: "Albums",
            heroCardLink: "/albums",
            heroCardIcon: 'music',
            heroCardStyle: "albumCard",
            }
        )

        setGenreCard(
            {
            heroCardImage: "https://cdn.playlists.net/images/playlists/image/large/2152689000f2996028ac9d174e2cd37a.jpg",
            titleHeader:"Show Music Genres",
            titleMeta:"Browse Through Music Genres",
            heroCardDescription:"You'll have Access To all Genres from Spotify's Music",
            heroCardLinkName: "Genres",
            heroCardLink: "/genres",
            heroCardIcon: 'headphones',
            heroCardStyle: "genreCard",
            }
        )
    }

    /* render onMount */
    useEffect(() => {
        setContent();
    }, [])


    return(
        <>
        <div className="mainBannerContainer">
        <BannerCard  {...artistCard}/>
        <BannerCard {...albumCard}/>
        <BannerCard  {...genreCard}/>
        </div>
        </>
    )
}
    
    export default HeroBanner