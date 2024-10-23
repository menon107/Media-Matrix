import { motion } from 'framer-motion';
import React from 'react';

const LoadingPage = () => {
  // Animation for letters to come from random directions and swirl
  const letterAnimation = {
    hidden: (custom) => ({
      opacity: 0,
      x: custom.x,  // Random initial position along the X-axis
      y: custom.y,  // Random initial position along the Y-axis
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 3,  // Full animation duration 3 seconds
        ease: 'easeInOut',
      },
    },
    swirl: {
      x: [0, 50, -50, 25, -25, 0],  // Define keyframes for X-axis to create the swirling motion
      y: [0, -50, 50, -25, 25, 0],  // Define keyframes for Y-axis to complement the swirl
      transition: {
        duration: 2,  // Swirl for 2 seconds
        ease: 'easeInOut',
        repeat: Infinity,  // Keep repeating until it settles
      },
    },
  };

  const mediaText = 'MEDIA'.split('');
  const matrixText = 'MATRIX'.split('');

  const randomPositions = () => ({
    x: Math.floor(Math.random() * 1200 - 600),  // Random start X position
    y: Math.floor(Math.random() * 1200 - 600),  // Random start Y position
  });

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      overflow: 'hidden'  // Ensure content stays within the screen
    }}>
      {/* Video background */}
      <video 
        autoPlay 
        loop 
        muted 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the video covers the entire area
          zIndex: -1  // Sends the video to the background
        }}
      >
        <source src="src\assets\LoadingPageBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
      }}>
        <div style={{ display: 'flex' }}>
          {mediaText.map((letter, index) => (
            <motion.span
              key={index}
              custom={randomPositions()} 
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              whileHover="swirl"
              style={{
                fontSize: '10rem',  // Make MEDIA larger
                marginRight: '5px',
                display: 'inline-block',
                color: "white",
                whiteSpace: 'pre-line',
                fontWeight: '800', 
                fontFamily: 'Anton',
                WebkitTextStroke: '1.8px red',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.3rem',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: '30px' }}>
          {matrixText.map((letter, index) => (
            <motion.span
              key={index}
              custom={randomPositions()} // Assign random positions
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              whileHover="swirl"
              style={{
                fontSize: '10rem',  // Smaller size for MATRIX
                fontWeight: '800',
                marginRight: '5px',
                display: 'inline-block',
                color: "white",
                whiteSpace: 'pre-line',
                fontFamily: 'Anton',
                WebkitTextStroke: '1.8px red',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.3rem',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
