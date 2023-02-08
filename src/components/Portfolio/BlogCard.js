import React from 'react'
import { Card, Typography, CardMedia, CardContent, Link, Box } from '@mui/material'

function BlogCard({blog}) {
    const {
        author, 
        categories,
        guid,
        link,
        pubDate,
        thumbnail,
        title
    } = blog
    let content
    if(blog.content){
        content = blog.content
    }

  return (
    <Link href = {link} underline = "none">
    <Card sx = {{maxWidth: 345, height: 369}}>
        <CardMedia
        sx={{height: 175}}
        image = {thumbnail}>
        </CardMedia>
        <CardContent sx ={{justifyContent: "center"}}>
            <Typography variant="h5">
                {title}
            </Typography>
            {content ?
            <Typography>
                {content.split(" ").slice(0, 20).join(" ") + "..."}
            </Typography>
            :
            null
            }
        
        </CardContent>
    </Card>
    </Link>
  )
}

export default BlogCard