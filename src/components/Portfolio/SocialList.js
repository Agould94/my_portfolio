import React from 'react'
import { Twitter, GitHub, LinkedIn } from '@mui/icons-material'
import { Avatar } from '@mui/material'

function SocialList({info}) {
    console.log(info.twitter)
  return (
    <ul className ="icon-list">
        <li>
            <a href = {info.twitter}>
            <Twitter sx={{color:"#ccd6f6"}}></Twitter>
            </a>
        </li>
        <li>
            <a href={info.linkedin}>
            <LinkedIn sx={{color:"#ccd6f6"}}></LinkedIn>
            </a>
        </li>
        <li>
            <a href={info.github}>
            <GitHub sx={{color:"#ccd6f6"}}></GitHub>
            </a>
        </li>
    </ul>
  )
}

export default SocialList