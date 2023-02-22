import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Info from './Info'
import BlogList from './BlogList'
import Projects from './Projects'
import Skills from './Skills'
import { Popover, Divider } from '@mui/material'
import Contact from './Contact'
import Tag from './Tag'
import Landing from './Landing'
import { Typography } from '@mui/material'


function Main({id, anchorEl, handleAnchorClose, open, data}) {

  const [info, setInfo] = useState(data.info[0])
  //const [loading, setLoading]=useState(true)
  console.log(info)

  // useEffect(()=>{
  //   console.log("effect")
  //   fetch("http://localhost:4000/info")
  //   .then((r)=>r.json())
  //   .then((info)=>{
  //     setInfo(info[0]) 
  //     setLoading(false)})
  // },[])

  return (
    <div>
      <div>
      <Popover 
      id={id}
      open = {open}
      anchorEl={anchorEl}
      onClose = {handleAnchorClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
        <Contact email = {info.email} phone = {info.phone} linkedin = {info.linkedin}></Contact>
      </Popover>
      <Landing></Landing>
      <Info info = {info}></Info>
      
      <Skills skills = {info.skills} technologies={info.technologies}></Skills>
      <Projects projects = {data.projects}></Projects>
      <BlogList blogs = {data.articles}></BlogList>
      <Divider/>
      <Tag></Tag>
      </div>
    </div>
  )
}

export default Main