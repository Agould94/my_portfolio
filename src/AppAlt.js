import React, { useEffect, useState } from 'react'
import BlogList from './components/Portfolio/BlogList'
import Info from './components/Portfolio/Info'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Portfolio/Main'
import NavBar from './components/Portfolio/NavBar'
import Resume from './components/Portfolio/Resume'

import data from './db.json'
import Landing from './components/Portfolio/Landing'

function AppAlt(){
  useEffect(()=>{console.log("hi")})
  const [anchorEl, setAnchorEl]=useState(null)
  console.log(data)
  
 function handleAnchorClick(e){
    setAnchorEl(e.currentTarget)
  }

  function handleAnchorClose(){
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;
  
  return (
    <div className="app">
      <NavBar handleAnchorClick={handleAnchorClick}></NavBar>
      <Switch>
        {/* <Route exact path ="/">
          <Landing></Landing>
        </Route> */}
        <Route path = "/">
          <Main data={data} anchorEl={anchorEl} handleAnchorClose={handleAnchorClose} open={open} id={id}></Main>
        </Route>
        <Route path = "/resume">
          <Resume></Resume>
        </Route>
        <Route path = "/projects">
          
        </Route>
      </Switch>
    </div>
  )
}

export default AppAlt