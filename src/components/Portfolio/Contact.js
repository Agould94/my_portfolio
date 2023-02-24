import React from 'react'
import {useForm, ValidationError} from '@formspree/react'
import {Box, Typography, Link, FormControl, TextField, Input, InputLabel, Button} from '@mui/material'

function Contact({phone, email, linkedin}) {

  const [state, handleSubmit] = useForm("mayzekva")

  if(state.succeeded){
    return <p>Thanks for sending a message, I'll get back to you soon!</p>
  }


  return (
    <Box className = "contact" sx = {{display:"flex", justifyContent:"center", flexDirection:"column", height:"100%"}}>
        <Typography variant="h5" sx={{display:"flex", justifyContent:"center", paddingBottom:2, color:"#ccd6f6", marginTop:3}}>Reach out to me!</Typography>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <form onSubmit = {handleSubmit} className="contact-form">
                <Box sx ={{display:"flex", flexDirection:"column", justifyContent:"center", paddingLeft:2, paddingRight:2}}>
                    <Box sx={{display:"flex", justifyContent:"center", paddingBottom:2}}>
                        <FormControl sx={{width:"60%"}} variant="standard">
                            <TextField label="Full Name" id="name" name="name" sx={{backgroundColor:"#e6f1ff", borderRadius:"5px"}}></TextField>
                        </FormControl>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"center", paddingBottom:2}}>
                        <FormControl sx={{width:"60%"}} variant="standard">
                            <TextField label= "email" type="email" id="email" name="email" sx={{backgroundColor:"#e6f1ff", borderRadius:"5px", textColor:"#ccd6f6"}}></TextField>
                        </FormControl>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"center", paddingLeft:2, paddingRight:2}}>
                        <FormControl fullWidth="true">
                            <TextField id="message" label="Message" name="message" multiline="true" rows={4} sx={{backgroundColor:"#e6f1ff", borderRadius:"5px"}}></TextField>
                        </FormControl>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"center", marginTop:1}}>
                        <Button variant='outlined' type="submit" sx={{width:"25%", color:"#64ffda", borderColor:"#64ffda"}}>Talk to you soon!</Button>
                    </Box>
                </Box>
            </form>
        </Box>
        <Box sx = {{paddingLeft:4, marginBottom:3}}>
            <Typography sx = {{color:"#ccd6f6"}}>Phone: {phone}</Typography>
            <Typography sx = {{color:"#ccd6f6"}}>Email: {email}</Typography>
            <Link href={linkedin} underline="hover">
            <Typography>Linkedin</Typography>
            </Link>
        </Box>
    </Box>
  )
}

export default Contact