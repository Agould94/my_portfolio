import React, { useEffect, useState } from 'react'
import BlogList from './components/Portfolio/BlogList'
import Info from './components/Portfolio/Info'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Portfolio/Main'
import NavBar from './components/Portfolio/NavBar'

function AppAlt(){
  useEffect(()=>{console.log("hi")})
 
  
  return (
    <div class="app">
      <NavBar></NavBar>
      <Switch>
        <Route exact path ="/">
          <Main></Main>
        </Route>
        <Route path = "/resume">

        </Route>
        <Route path = "/projects">
          
        </Route>
      </Switch>
    </div>
  )
}

export default AppAlt