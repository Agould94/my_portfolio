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
        <Box sx = {{backgroundColor:"#112240", paddingBottom:5}}>
            <Box className = "leftJustifiedBox" sx = {{display: "flex", marginLeft: "12.5%", alignItems:"center", height: "75vh", width:"100vw"}}>
                <Box sx = {{display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:4}}>
                    <iframe width="425" height="300" 
                    src={projects[0].embedurl} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>
                    <Typography variant="h5" sx={{display:"flex", justifyContent:"center", color:"#e6f1ff"}}>{projects[0].name}</Typography>
                </Box>
                <Box sx ={{display:"flex", width: "50%", flexDirection:"column", height:"290px", backgroundColor:"#0a192f"}}>
                    <Box sx={{display:"flex", padding:3}}>
                        <Typography variant = "p" sx={{color:"#e6f1ff"}} >{projects[0].description}</Typography>
                    </Box>
                        <Box sx={{display:"flex", justifyContent:"flex-end", paddingRight:3, paddingBottom:3}}>
                            <Link href = {projects[0].github}>
                                <Button variant="outlined" sx={{color:"#64ffda",borderColor:"#64ffda", marginRight:1}}>
                                    <Avatar className = "avtr" sx={{marginRight:1, height:"100%", width:"25%"}}>
                                        <GitHub/>
                                    </Avatar>
                                    Github
                                </Button>
                            </Link>
                            <Link href = {projects[0].demo}>
                                <Button variant ="outlined" sx = {{color:"#64ffda",borderColor:"#64ffda"}}>
                                    Live Demo
                                </Button>
                            </Link>
                        </Box>
                </Box>
            </Box>
            <Box className = "RightJustifiedBox" sx = {{display: "flex", flexDirection: 'row-reverse', paddingRight:"12.5%", alignItems: "center", height:"75vh", width:"100vw"}}>
                <Box sx = {{display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:4}}>
                <iframe width="400" height="250" 
                src={projects[1].embedurl} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                <Typography variant="h5" sx={{display:"flex", justifyContent:"center", color:"#e6f1ff"}}>{projects[1].name}</Typography>
                </Box>
                <Box className = "textBox" sx ={{display:"flex", width: "50%", height:"250", marginLeft: 2, paddingLeft:2, justifyContent:"center", flexDirection:"column", backgroundColor:"#0a192f", padding:3}}>
                    <Box sx={{display:"flex", padding:3}}>
                        <Typography variant = "p" color={"#e6f1ff"}>{projects[1].description}</Typography>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"flex-start", paddingLeft:3}}>
                        <Link href = {projects[1].github}>
                            <Button variant="outlined" sx={{color:"#64ffda",borderColor:"#64ffda", marginRight:1}}>
                                <Avatar className = "avtr" sx={{marginRight:1, height:"100%", width:"25%"}}>
                                    <GitHub/>
                                </Avatar>
                                Github
                            </Button>
                        </Link>
                        <Link href = {projects[1].demo}>
                            <Button variant ="outlined" sx = {{color:"#64ffda",borderColor:"#64ffda"}}>
                                Live Demo
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box className = "leftJustifiedBox" sx = {{display: "flex", marginLeft: "12.5%", height: "75vh", width:"100vw", alignItems:"center" }}>
                <Box sx = {{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <iframe width="400" height="250" 
                    src={projects[2].embedurl} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>
                    <Typography variant="h5" sx={{display:"flex", justifyContent:"center", color:"#e6f1ff"}}>{projects[2].name}</Typography>
                   
                </Box>
                <Box sx ={{display:"flex", width: "32%", backgroundColor:"#0a192f", height:"228.5px", boxShadow:5, marginBottom:"30px", flexDirection:"column", justifyContent:"space-between"}}>
                    <Box sx={{display:"flex", padding:3, paddingTop:"14%"}}>
                        <Typography variant = "p" color={"#e6f1ff"}>{projects[2].description}</Typography>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"flex-end", alignItems:"end", paddingRight:3, paddingBottom:3}}>
                        <Link href = {projects[2].github}>
                            <Button variant="outlined" sx={{color:"#64ffda",borderColor:"#64ffda", marginRight:1}}>
                                <Avatar className = "avtr" sx={{marginRight:1, height:"100%", width:"25%"}}>
                                    <GitHub/>
                                </Avatar>
                                Github
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box className = "RightJustifiedBox" sx = {{display: "flex", flexDirection: 'row-reverse', paddingRight: "12.5%", alignItems: "center", height:"75vh", width:"100vw"}}>
                <Box sx = {{display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:4}}>
                <iframe width="400" height="250" 
                src={projects[3].embedurl} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                <Typography variant="h5" sx={{display:"flex", justifyContent:"center", color:"#e6f1ff"}}>{projects[3].name}</Typography>
                </Box>
                <Box className = "textBox" sx ={{height:"250", display:"flex", width: "32%", marginLeft: 2, justifyContent:"center", backgroundColor:"#0a192f", padding:3, flexDirection:"column"}}>
                    <Box sx={{display:"flex", padding:3}}>
                        <Typography variant = "p" color={"#e6f1ff"}>{projects[3].description}</Typography>
                    </Box>
                    <Box sx={{display:"flex", paddingLeft:3}}>
                        <Link href = {projects[3].github}>
                            <Button variant="outlined" sx={{color:"#64ffda",borderColor:"#64ffda", marginRight:1}}>
                                <Avatar className = "avtr" sx={{marginRight:1, height:"100%", width:"25%"}}>
                                    <GitHub/>
                                </Avatar>
                                Github
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box className = "leftJustifiedBox" sx = {{display: "flex", marginLeft: "12.5%", height: "75vh", width:"100vw", alignItems:"center"}}>
                <Box sx = {{display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:4}}>
                    <iframe width="400" height="250" 
                    src={projects[4].embedurl} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>
                    <Typography variant="h5" sx={{display:"flex", justifyContent:"center", color:"#e6f1ff"}}>{projects[4].name}</Typography>
                </Box>
                <Box sx ={{display:"flex", width: "32%", flexDirection:"column", backgroundColor:"#0a192f"}}>
                    <Box sx = {{display:"flex", padding:3}}>
                        <Typography variant = "p" color={"#e6f1ff"}>{projects[4].description}</Typography>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"flex-end", paddingRight:3, paddingBottom:3}}>
                        <Link href = {projects[4].github}>
                            <Button variant="outlined" sx={{color:"#64ffda",borderColor:"#64ffda", marginRight:1}}>
                                <Avatar className = "avtr" sx={{marginRight:1, height:"100%", width:"25%"}}>
                                    <GitHub/>
                                </Avatar>
                                Github
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Projects