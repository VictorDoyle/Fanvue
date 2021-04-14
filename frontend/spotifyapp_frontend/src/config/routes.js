import React from 'react'
import {Switch, Route} from 'react-router-dom'

/* page imports*/
import LandingPage from '../pages/LandingPage'
import HomePage from '../pages/HomePage'
import Artists from '../pages/Artists'
import Albums from '../pages/Albums'
import Genres from '../pages/Genres'



export default(
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route path='/home' component={ HomePage }/>
        <Route path='/artists' component={Artists}/>
        <Route path='/albums' component={Albums} />
        <Route path='/genres' component={Genres} />
    </Switch>
   
   )