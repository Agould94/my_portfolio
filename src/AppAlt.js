import React, { useEffect, useState } from 'react'
import BlogList from './components/Portfolio/BlogList'
import Info from './components/Portfolio/Info'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Portfolio/Main'

function AppAlt() {

  return (
    <div>
      <Switch>
        <Route exact path ="/">
          <Main></Main>
        </Route>
        <Route path = "/resume">

        </Route>
        <React path = "projects">
          
        </React>
      </Switch>
    </div>
  )
}

export default AppAlt