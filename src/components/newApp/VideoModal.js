import React, { useState } from 'react';


const VideoModal = ({ isOpen, closeModal, videoId }) => {
    const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&cc_load_policy=1`;

    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button style={styles.closeButton} onClick={closeModal}>Close</button>
                <iframe
                    style={styles.video}
                    src={videoSrc}
                    loading ="lazy"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        position: 'relative',
        width: '80%',
        maxWidth: '640px',
        backgroundColor: 'bisque',
        padding: '50px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        fontSize: '1.2rem',
    },
    video: {
        width: '100%',
        height: '360px',  // Adjust based on your needs
    }
};

export default VideoModal;