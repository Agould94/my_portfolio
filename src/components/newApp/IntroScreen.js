import React, { useEffect, useState } from 'react';

function IntroScreen({ onComplete, leaf }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Trigger this effect once the image is loaded
  useEffect(() => {
    if (isImageLoaded) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onComplete(); // Notify parent that intro is done
      }, 150000); // Match animation duration

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [isImageLoaded, onComplete]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Function to split the text into individual letters
  const renderLetters = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="letter"
        style={{ animationDelay: `${index * 0.2}s` }} // Delay each letter animation
      >
        {char}
      </span>
    ));
  };

  return (
    isVisible && (
      <div className="intro-screen">
        <h1 className="intro-text">
          {isImageLoaded ? renderLetters("WELCOME") : ""} {/* Replace "WELCOME" with your desired text */}
        </h1>
        <img
          onLoad={handleImageLoad} // Wait for the image to load before starting the animation
          src={leaf}
          className={isImageLoaded ? "leaf" : ""}
          alt="Floating Leaf"
        />
      </div>
    )
  );
}

export default IntroScreen;