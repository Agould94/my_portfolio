import React, { useState } from 'react';

const videoUrl = 'https://www.youtube.com/embed/430c07a9ekg?autoplay=1&cc_load_policy=1';  // Set your video URL here
function NDAModal({ isOpen, closeModal, showVideo }) {
  const [ndaData, setNdaData] = useState({ name: '', email: '' });
  const [isNdaSigned, setIsNdaSigned] = useState(false)

  const handleChange = (e) => {
    setNdaData({
      ...ndaData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ndaData)
    fetch('http://localhost:3001/nda', {  // Change this to your backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ndaData),
    })
    .then(response => response.json())
    .then(data => {
      alert('NDA signed successfully');
      setIsNdaSigned(true)
      showVideo();  // Unlock video access
    })
    .catch(error => {
      console.error('Error signing NDA:', error);
    });
  };

  if (!isOpen) return null;

  return (
    <div className = "modal-overlay">
      <div className = "modal-content">
        <button className="modal-close-button" onClick={closeModal}>Close</button>
         {!isNdaSigned ? (
          <>
            <form className = 'contact-form' onSubmit={handleSubmit}>
            <h2>Sign NDA to Access the Video</h2>
            <div className = "form-group">
              <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            </div>
            <div className = "form-group">
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            </div>
            <div className = "form-group">
              <button type="submit">Sign NDA</button>
            </div>
            </form>
          </>
         ) : (
           <div>
             <h2>Video</h2>
             <iframe
                 className = "modal-video"
                 src={videoUrl}  // Display video once NDA is signed
                 loading="lazy"
                 allow="autoplay; encrypted-media"
                 allowFullScreen
                 title="Protected video"
             ></iframe>
          </div>
         )}
      </div>
    </div>
  );
}

export default NDAModal;
