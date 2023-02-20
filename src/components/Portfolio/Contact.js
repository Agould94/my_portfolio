import React from 'react'
import {useForm, ValidationError} from '@formspree/react'
import {Box, Typography, Link, FormControl, TextField, Input, InputLabel, Button} from '@mui/material'

function Contact({phone, email, linkedin}) {

  const [state, handleSubmit] = useForm("mayzekva")

  if(state.succeeded){
    return <p>Thanks for sending a message, I'll get back to you soon!</p>
  }


  return (
    <Box className = "contact" sx = {{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <Typography variant="h5" sx={{display:"flex", justifyContent:"center", paddingBottom:2}}>Reach out to me!</Typography>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <form onSubmit = {handleSubmit} className="contact-form">
                <Box sx ={{display:"flex", flexDirection:"column", justifyContent:"center", paddingLeft:2, paddingRight:2}}>
                    <Box sx={{display:"flex", justifyContent:"center", paddingBottom:2}}>
                        <FormControl sx={{width:"60%"}} variant="standard">
                            <TextField label="Full Name" id="name" name="name" sx={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></TextField>
                        </FormControl>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"center", paddingBottom:2}}>
                        <FormControl sx={{width:"60%"}} variant="standard">
                            <TextField label= "email" type="email" id="email" name="email" sx={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></TextField>
                        </FormControl>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"center", paddingLeft:2, paddingRight:2}}>
                        <FormControl fullWidth="true">
                            <TextField id="message" label="Message" name="message" multiline="true" rows={4} sx={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></TextField>
                        </FormControl>
                    </Box>
                    <Button type="submit">Talk to you soon!</Button>
                </Box>
            </form>
        </Box>
        <Box sx = {{paddingLeft:4}}>
            <Typography>Phone: {phone}</Typography>
            <Typography>Email: {email}</Typography>
            <Link href={linkedin} underline="hover">
            <Typography>Linkedin</Typography>
            </Link>
        </Box>
    </Box>
  )
}

export default Contact