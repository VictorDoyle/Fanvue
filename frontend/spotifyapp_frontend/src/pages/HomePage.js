import React, {useState, useEffect} from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import IntroHeader from '../components/IntroHeader/IntroHeader';
import Cookies from 'js-cookie';

function HomePage() {

    /* set sessionId for auth */
    Cookies.set('mainCookie', Cookies.get("sessionid"), { expires: 7 });


   
 
    useEffect(() => {
        
    }, [])

  
   



    return(
        <>
           {/* customized welcome for users */}
           <IntroHeader />

            {/* User selection Cards */}
            <HeroBanner />

        
        
       
        
       
        </>
    )
}

export default HomePage