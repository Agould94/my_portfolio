import React from 'react'

function Info({info}){
  const {firstName, lastName, email, bio, interests, linkedin, skills, technologies} = info
  return (
    <div>
      <h1>{firstName}</h1>
      <p></p>
    </div>
  )
}

export default Info