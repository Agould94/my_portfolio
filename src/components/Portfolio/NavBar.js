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



function NavBar() {

  return (
    <AppBar position = "static" sx={{background: "#404040"}}>
        <CssBaseline/>
        <Toolbar>
            <Typography variant = "h5" component={Link} to = "/" sx={{textDecoration: "none", color: "black", marginLeft: "-20px", marginRight: "10px"}}>
                Alexander Gould
            </Typography>
            <Box sx = {{display: "flex", flexGrow: 1}}>
                <Button sx = {{color: 'black', marginTop: '5px'}} variant = "text" component= {Link} to = "/resume" >
                    Resume
                </Button>
                <Button sx = {{color: 'black', marginTop: '5px'}} variant = "text" component= {Link} to = "/projects" >
                    Projects
                </Button>
            </Box>
                <Box>
                 <Button sx = {{color: 'black', marginTop: '5px'}} variant = "text" component= {Link} to = "/contact" >
                    Contact
                </Button>
                </Box>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar