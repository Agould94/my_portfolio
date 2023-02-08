import React, {useEffect, useState} from 'react'
import BlogCard from "./BlogCard"
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"


function BlogList() {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)



   useEffect(()=>{
    fetch(('http://localhost:4000/articles'))
    .then((r)=>r.json())
    .then((d)=> {
        setBlogs(d) 
    })

   }, []
   )
   
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


  return (
    <Carousel responsive={responsive} autoPlaySpeed={1000} infinite={true} swipeable={true} centerMode={true} >{blogsToDisplay}</Carousel>
  )
}

export default BlogList