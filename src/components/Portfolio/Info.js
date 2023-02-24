import React from 'react'
import { Avatar, Box, Typography, Divider } from '@mui/material'
import pic from '../../assets/Portfolio_pic_2.jpeg' 
import Skills from './Skills'

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
          <Typography variant="p" className = "body-text" sx = {{width:"75%", paddingRight:4}}>Entrepreneurial professional with hands-on experience developing new products, applications, platforms, and solutions.</Typography>
          <br/>
          <Typography variant="p" className = "body-text" sx = {{width:"75%", paddingRight:4}}>Exceptionally well-versed in business, financial services, technology, and data analysis – supported by intellectual curiosity and a razor-sharp focus on exposing, understanding, and seizing opportunities in digital innovation, marketing, customer success, and growth.</Typography>
        </Box>
      </Box>
      <p></p>
    </div>
  )
}

export default Info