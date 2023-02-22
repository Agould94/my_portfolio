import React from 'react'
import { Twitter, GitHub, LinkedIn } from '@mui/icons-material'
import { Avatar } from '@mui/material'

function SocialList() {
  return (
    <ul className ="icon-list">
        <li>
            <Twitter sx={{color:"#ccd6f6"}}></Twitter>
        </li>
        <li>
            <LinkedIn sx={{color:"#ccd6f6"}}></LinkedIn>
        </li>
        <li>
            <GitHub sx={{color:"#ccd6f6"}}></GitHub>
        </li>
    </ul>
  )
}

export default SocialList