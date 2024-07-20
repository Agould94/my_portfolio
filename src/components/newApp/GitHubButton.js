import React from 'react';
import {GitHub} from '@mui/icons-material'
 // Make sure to import the GitHub logo

const GitHubButton = ({github}) => {
  return (
    <a href={github} // Update with your actual GitHub link
       className='gh-button'
       target="_blank"
       rel="noopener noreferrer">
      <GitHub sx ={{fontSize: "inherit"}}/>
      GitHub
    </a>
  );
};

// const styles = {
//   button: {
//     width:'50px',
//     height: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#333', // GitHub's color, you can choose another
//     color: 'white',
//     padding: '5px 10px',
//     borderRadius: '10px',
//     textDecoration: 'none', // Removes underline from the link
//     fontSize: 'inherit', // Adjust based on your preference
//     fontWeight: 'bold',
//   },
//   logo: {
//     height: '20px', // Adjust based on your preference
//     marginRight: '5px', // Space between the logo and the text
//   }
// };

export default GitHubButton;