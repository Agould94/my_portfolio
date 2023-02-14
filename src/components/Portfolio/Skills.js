import React, {useState} from 'react'
import { Typography, Box } from '@mui/material'
import figmaIcon from "../../assets/figma.png"
import javaIcon from "../../assets/java.png"
import javascriptIcon from "../../assets/javascript.png"
import miroIcon from "../../assets/miro.png"
import notionIcon from "../../assets/notion.png"
import photoshopIcon from "../../assets/photoshop.png"
import postgresqlIcon from "../../assets/postgresql.png"
import pythonIcon from "../../assets/python.png"
import railsIcon from "../../assets/rails.png"
import reactIcon from "../../assets/react.png"
import rubyIcon from "../../assets/ruby.png"
import canvaIcon from "../../assets/canva.png"


function Skills({skills, technologies}) {
  const [tech, setTech] = useState(null)
  console.log(tech)

  const skillsToDisplay = skills.map((skill)=>{
    return(
        <Typography>{skill}</Typography>
    )
  })

  const technologiesToDisplay = technologies.map((technology)=>{
    return(
      <img src = {{technology}+'Icon'}></img>
    )
  })

  function handleMouseEnter(e){
    console.log(e)
    setTech(e.target.alt)
  }
  function handleMouseLeave(){
    setTech(null)
  }

  return (
    <Box sx = {{display:"flex", paddingBottom:5, justifyContent:"center"}}>
      <div className = "circle" >
          <div className = "innerCircle">
            {tech ?
              <Typography className = "innerCircleText">{tech}</Typography>
            :
              <Typography className = "innerCircleText">Technologies</Typography>
            }
          </div>
        <ul className='menu'>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {javaIcon} style ={{height:35, width:35}} alt = 'Java'></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {canvaIcon} style ={{height:35, width:35}} alt = "Canva"></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {figmaIcon} style ={{height:35, width:35}} alt = "Figma"></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {notionIcon} style ={{height:35, width:35}} alt = "Notion"></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {photoshopIcon} style ={{height:35, width:35}} alt = "Photoshop"></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {miroIcon} style={{heigh:35, width:35}} alt="Miro"></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {postgresqlIcon} style ={{height:35, width:35}} alt = "PostgreSQL"></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {pythonIcon} style ={{height:35, width:35}} alt = "Python"></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {javascriptIcon} style ={{height:35, width:35}} alt = "JavaScript"></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {reactIcon} style ={{height:35, width:35}} alt = "React"></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {railsIcon} style ={{height:35, width:35}} alt = "Rails"></img>
          </li>
          <li onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            <img src = {rubyIcon} style ={{height:35, width:35}} alt = "Ruby"></img>
          </li>
        </ul>
       
      </div>
    </Box>
  )
}

export default Skills