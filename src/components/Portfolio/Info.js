import React from 'react'
import { Avatar, Box, Typography, Divider } from '@mui/material'
import pic from '../../assets/AlexanderGould.png' 

function Info({info}){
  const {firstName, lastName, email, bio, interests, linkedin, skills, technologies} = info
  return (
    <div>
      <Box sx ={{display: "flex", marginTop:2}} className = "info">
        <Box sx ={{display: "flex", justifyContent: "center", alignItems:"center", marginLeft:8, width:"50%"}}>
          <Avatar src={pic} sx={{height: 250, width:250}}></Avatar>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem></Divider>
        <Box sx={{display:"flex", alignItems:"flex-start", flexDirection:"column", justifyContent:"flex-start", marginLeft:5, width:"50%"}}>
          <Typography variant="h2" className = "header-text">About Me</Typography>
          <Typography variant="p" className = "body-text" sx = {{width:"75%", paddingRight:4}}>{bio}</Typography>
        </Box>
      </Box>
      <p></p>
    </div>
  )
}

export default Info