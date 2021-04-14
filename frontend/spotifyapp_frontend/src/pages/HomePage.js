import React, {useState, useEffect} from 'react';
import UserModel from '../models/users';


function HomePage() {

    const [ user, setUser] = useState()

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = () => {
        UserModel.getUser().then(json => {
            setUser(json)
        })
    }

    console.log("USER", user)

    return(
        <>
        add hero banner here


        
       
        
       
        </>
    )
}

export default HomePage