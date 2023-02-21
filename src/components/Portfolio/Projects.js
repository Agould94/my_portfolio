import React,{useState, useEffect} from 'react'
import { Box, Typography, Avatar, Button, Link } from '@mui/material'
import { GitHub } from '@mui/icons-material'

function Projects({projects}) {
    // const [projects, setProjects]= useState(projects)
    // const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     fetch(('http://localhost:4000/projects'))
    //     .then((r)=>r.json())
    //     .then((d)=> {
    //         setProjects(d) 
    //         setLoading(false)
    //     })}, []
    //    )


  return (
    <div>
        <Box sx = {{backgroundColor:"#888888", paddingBottom:5}}>
            <Box className = "leftJustifiedBox" sx = {{display: "flex", marginLeft: 8, height: 350, alignItems:"center"}}>
                <Box sx = {{display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:4}}>
                    <iframe width="400" height="250" 
                    src={projects[0].embedurl} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>
                    <Typography variant="h5" sx={{display:"flex", justifyContent:"center"}}>{projects[0].name}</Typography>
                    <Box>
                        <Link href = {projects[0].github}>
                            <Button variant="contained" sx={{backgroundColor:"#363636", marginRight:1}}>
                                <Avatar className = "avtr" sx={{marginRight:1, height:"100%", width:"25%"}}>
                                    <GitHub/>
                                </Avatar>
                                Github
                            </Button>
                        </Link>
                        <Link href = {projects[0].demo}>
                            <Button variant ="contained" sx = {{backgroundColor:"#363636"}}>
                                Live Demo
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box sx ={{display:"flex", width: "32%", marginLeft: 2}}>
                    <Typography variant = "p" >{projects[0].description}</Typography>
                </Box>
            </Box>
            <Box className = "RightJustifiedBox" sx = {{display: "flex", flexDirection: 'row-reverse', marginRight: 8, alignItems: "center", height:300}}>
                <Box sx = {{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <iframe width="400" height="250" 
                src={projects[1].embedurl} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                <Typography variant="h5" sx={{display:"flex", justifyContent:"center"}}>{projects[1].name}</Typography>
                <Box>
                        <Link href = {projects[1].github}>
                            <Button variant="contained" sx={{backgroundColor:"#363636", marginRight:1}}>
                                <Avatar className = "avtr" sx={{marginRight:1, height:"100%", width:"25%"}}>
                                    <GitHub/>
                                </Avatar>
                                Github
                            </Button>
                        </Link>
                        <Link href = {projects[1].demo}>
                            <Button variant ="contained" sx = {{backgroundColor:"#363636"}}>
                                Live Demo
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box className = "textBox" sx ={{display:"flex", width: "32%", marginLeft: 2, alignItems:"center"}}>
                    <Typography variant = "p" >{projects[1].description}</Typography>
                </Box>
            </Box>
            <Box className = "leftJustifiedBox" sx = {{display: "flex", marginLeft: 8, height: 300, alignItems:"center"}}>
                <Box sx = {{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <iframe width="400" height="250" 
                    src={projects[2].embedurl} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>
                    <Typography variant="h5" sx={{display:"flex", justifyContent:"center"}}>{projects[2].name}</Typography>
                    <Box>
                        <Link href = {projects[2].github}>
                            <Button variant="contained" sx={{backgroundColor:"#363636", marginRight:1}}>
                                <Avatar className = "avtr" sx={{marginRight:1, height:"100%", width:"25%"}}>
                                    <GitHub/>
                                </Avatar>
                                Github
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box sx ={{display:"flex", width: "32%", marginLeft: 2}}>
                    <Typography variant = "p" >{projects[2].description}</Typography>
                </Box>
            </Box>
            <Box className = "RightJustifiedBox" sx = {{display: "flex", flexDirection: 'row-reverse', marginRight: 8, alignItems: "center", height:300}}>
                <Box sx = {{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <iframe width="400" height="250" 
                src={projects[3].embedurl} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                <Typography variant="h5" sx={{display:"flex", justifyContent:"center"}}>{projects[3].name}</Typography>
                <Box>
                        <Link href = {projects[3].github}>
                            <Button variant="contained" sx={{backgroundColor:"#363636", marginRight:1}}>
                                <Avatar className = "avtr" sx={{marginRight:1, height:"100%", width:"25%"}}>
                                    <GitHub/>
                                </Avatar>
                                Github
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box className = "textBox" sx ={{display:"flex", width: "32%", marginLeft: 2, alignItems:"center"}}>
                    <Typography variant = "p" >{projects[3].description}</Typography>
                </Box>
            </Box>
            <Box className = "leftJustifiedBox" sx = {{display: "flex", marginLeft: 8, height: 300, alignItems:"center"}}>
                <Box sx = {{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <iframe width="400" height="250" 
                    src={projects[4].embedurl} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>
                    <Typography variant="h5" sx={{display:"flex", justifyContent:"center"}}>{projects[4].name}</Typography>
                                        <Box>
                        <Link href = {projects[4].github}>
                            <Button variant="contained" sx={{backgroundColor:"#363636", marginRight:1}}>
                                <Avatar className = "avtr" sx={{marginRight:1, height:"100%", width:"25%"}}>
                                    <GitHub/>
                                </Avatar>
                                Github
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box sx ={{display:"flex", width: "32%", marginLeft: 2}}>
                    <Typography variant = "p" >{projects[4].description}</Typography>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Projects