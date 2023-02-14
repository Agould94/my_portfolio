import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Info from './Info'
import BlogList from './BlogList'
import Projects from './Projects'
import Skills from './Skills'



function Main() {

  const [info, setInfo] = useState({})
  const [loading, setLoading]=useState(true)
  console.log(info)

  useEffect(()=>{
    console.log("effect")
    fetch("http://localhost:4000/info")
    .then((r)=>r.json())
    .then((info)=>{
      setInfo(info[0]) 
      setLoading(false)})
  },[])

  return (
    <div>
      {loading 
      ?
      null
      :
      <div>
      <Info info = {info}></Info>
      <Skills skills = {info.skills} technologies={info.technologies}></Skills>
      <Projects></Projects>
      <BlogList></BlogList>
      </div>
      }
    </div>
  )
}

export default Main