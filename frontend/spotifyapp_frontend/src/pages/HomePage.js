import React, {useState, useEffect} from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import IntroHeader from '../components/IntroHeader/IntroHeader';
import Cookies from 'js-cookie';
function HomePage() {
    const [currentUser, setCurrentUser] = useState("")

    /* set sessionId for auth */
  /*   Cookies.set('mainCookie', Cookies.get("sessionid"), { expires: 7 });
 */

  useEffect(()=> {
    fetch('http://localhost:8000/api/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
            setCurrentUser({ username: json.username });
          console.log(json, "currentUser Id -- use for profile page url")
        });
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