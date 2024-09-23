import React from 'react';

const VideoModal = ({ isOpen, closeModal, videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&cc_load_policy=1`;

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={closeModal}>
          Close
        </button>
        <iframe
          className="modal-video"
          src={videoSrc}
          loading="lazy"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default VideoModal;