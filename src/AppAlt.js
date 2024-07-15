import React, { useEffect, useState } from 'react'
import BlogList from './components/Portfolio/BlogList'
import Info from './components/Portfolio/Info'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Portfolio/Main'
import NavBar from './components/Portfolio/NavBar'
import Resume from './components/Portfolio/Resume'
import SocialList from './components/Portfolio/SocialList'


import data from './db.json'
import Landing from './components/Portfolio/Landing'

function AppAlt(){
  useEffect(()=>{console.log("hi")})
  const [anchorEl, setAnchorEl]=useState(null)
  console.log(data.info)
  
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
      <div className="social-list">
       <SocialList info = {data.info}></SocialList>
      </div>
      <Switch>
        {/* <Route exact path ="/">
          <Landing></Landing>
        </Route> */}
        <Route exact path = "/main">
          <Main data={data} anchorEl={anchorEl} handleAnchorClose={handleAnchorClose} open={open} id={id}></Main>
        </Route>
        <Route path = "/main/resume">
          <Resume></Resume>
        </Route>
        <Route path = "/main/projects">
          <h1>hi</h1>
        </Route>
      
      </Switch>
    </div>
  )
}

export default AppAlt