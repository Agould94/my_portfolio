import React,{useState, useEffect} from 'react'
import NavBar from './NavBar'
import Info from './Info'
import BlogList from './BlogList'

function Main() {

  const [info, setInfo] = useState({})
  console.log(info)

  useEffect(()=>{
    fetch("http://localhost:4000/info")
    .then((r)=>r.json())
    .then((info)=>setInfo(info[0]))
  },[])

  return (
    <div>
      <NavBar></NavBar>
      <Info info = {info}></Info>
      <BlogList></BlogList>
    </div>
  )
}

export default Main