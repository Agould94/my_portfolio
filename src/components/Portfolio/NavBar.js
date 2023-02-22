import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Button,
  Box,
  InputBase
} from "@mui/material";

import { Link, useHistory } from "react-router-dom";
import { getThemeProps } from '@mui/system';
import { ClassNames } from '@emotion/react';



function NavBar({handleAnchorClick}) {

  return (
    <AppBar position = "sticky" sx={{background: "#0a192f", boxShadow: "none"}}>
        <CssBaseline/>
        <Toolbar>
            <Typography variant = "h5" component={Link} to = "/" sx={{textDecoration: "none", color: "#e6f1ff", marginLeft: "5px", marginRight: "10px"}}>
                Alexander Gould
            </Typography>
            <Box sx = {{display: "flex", flexGrow: 1}}>
            </Box>
            <Box sx={{display:"flex"}}>
                <Typography variant="p" sx = {{color:"#64ffda", display:"flex", alignItems:"center", paddingTop:"5px"}}>01.</Typography>
                <Button sx = {{color: '#ccd6f6', marginTop: '5px', paddingLeft:"0px"}} variant = "text" component= {Link} to = "/about" >
                    About
                </Button>
                <Typography variant="p" sx = {{color:"#64ffda", display:"flex", alignItems:"center", paddingTop:"5px"}}>02.</Typography>
                <Button sx = {{color: '#ccd6f6', marginTop: '5px', paddingLeft:"0px"}} variant = "text" component= {Link} to = "/resume" >
                    Resume
                </Button>
                <Typography variant="p" sx = {{color:"#64ffda", display:"flex", alignItems:"center", paddingTop:"5px"}}>03.</Typography>
                <Button sx = {{color: '#ccd6f6', marginTop: '5px', paddingLeft:"0px"}} variant = "text" component= {Link} to = "/projects" >
                    Projects
                </Button>
                 <Button sx = {{color: '#64ffda', marginTop: '5px', borderColor: "#64ffda"}} variant="outlined" onClick = {handleAnchorClick} >
                    Contact
                </Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar