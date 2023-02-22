import React, {useEffect, useState} from 'react'
import BlogCard from "./BlogCard"
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import { Box } from '@mui/system'
import { Typography } from '@mui/material'



function BlogList({blogs}) {
  console.log(blogs)
  //  useEffect(()=>{
  //   fetch(('http://localhost:4000/articles'))
  //   .then((r)=>r.json())
  //   .then((d)=> {
  //       setBlogs(d) 
  //   })}, [])
   
   const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 5
   }
    }

   const blogsToDisplay = blogs.map((blog)=>{
    return(<div><BlogCard blog = {blog}></BlogCard></div>)
   })

   console.log(blogsToDisplay)


  return (
    <Box>
      <Typography sx={{display:"flex", marginTop:3, justifyContent:"center", color:"#ccd6f6"}} variant="h3">Some Things I've Written</Typography>
      <Box sx = {{marginTop:5, marginBottom:5, marginLeft:"12.5vw", position:"relative", width:"75vw"}}>
          <Carousel responsive={responsive} autoPlaySpeed={1000} infinite={true} swipeable={true} centerMode={true}>
            {blogsToDisplay}
          </Carousel>
          <div className="right-gradient"/>
          <div className="left-gradient"/>
      </Box>
    </Box>
  )
}

export default BlogList