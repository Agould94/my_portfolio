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
import { fontWeight } from '@mui/system'


function Skills({skills, technologies}) {
  const [tech, setTech] = useState(null)
  console.log(tech)
  const skillText1 = "I am proficient in both{''} frontend and backend engineering frameworks, as well as several product design and management tools. I love learning new technologies and bringing digital products to life!"
  const skillText2="I am expierienced at programming in:"
  

  const skillsToDisplay = ["Ruby", "Rails", "Python","JavaScript", "React", "PostgreSQL", "Java"].map((skill)=>{
    return(
        <li className="skill-li"><span>{skill}</span></li>
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
    <Box sx = {{display:"flex", paddingBottom:5, marginTop:"100px"}}>
      <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", paddingLeft:8, paddingTop:5}}>
        <Typography variant="h4" sx={{color:"#a8b2d1", display:"flex", justifyContent:"center"}}>Skillset</Typography>
        <Typography variant="p" sx={{color:"#a8b2d1", display:"inline", justifyContent:"flex-end", width:"75%", paddingLeft:"45px"}}>I am proficient in both <span className="greenText">frontend </span>and <span className="greenText">backend engineering </span> frameworks, as well as several <span className="greenText">product design and management tools. </span> I love learning new technologies and bringing digital products to life!</Typography>
        <br/>
        <Typography variant="p" sx={{color:"#a8b2d1", width:"75%", paddingLeft:"45px"}}>{skillText2}</Typography>
        <Box sx={{display:"flex", justifyContent:"flex-start", paddingRight:18}}>
        <ul className = "skill-list">
          {skillsToDisplay}
        </ul>
        </Box>
      </Box>
      <Box sx={{display:"flex", justifyContent:"flex-start", width:"50%", paddingLeft:10}}>
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
    </Box>
  )
}

export default Skills