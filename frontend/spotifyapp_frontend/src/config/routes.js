import React from 'react'
import {Switch, Route} from 'react-router-dom'

/* page imports*/
import LandingPage from '../pages/LandingPage'



export default(
    <Switch>
        <Route exact path='/' component={ LandingPage } />
     
    </Switch>
   
   )