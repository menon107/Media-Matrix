import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Animation.css';

export default function Animation({ setBlackBackground }) {
  const [scrollPosition, setScrollPosition] = useState(1);
  const [showFrames, setShowFrames] = useState({
    frame1: false,
    frame2: false,
    frame3: false,
    frame4: false,
  });

  // Handle scroll and update frames based on the scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    // Update frame visibility based on scroll position
    setShowFrames({
      frame1: position >= 0 && position < 300,
      frame2: position >= 300 && position < 600,
      frame3: position >= 600 && position < 900,
      frame4: position >= 900,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="animation-container">
      {showFrames.frame1 && (
        <div className="frame">
          <motion.img
            src="src/assets/BigTrees.png"
            alt="Big Trees"
            className="big-trees"
            initial={{ scale: 2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <motion.img
            src="src/assets/Left.png"
            alt="Left Tree"
            className="left-tree"
            initial={{ x: '-100vw' }}
            animate={{ x: '0vw' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <motion.img
            src="src/assets/Right.png"
            alt="Right Tree"
            className="right-tree"
            initial={{ x: '100vw' }}
            animate={{ x: '0vw' }} transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <motion.img
            src="src/assets/Cycle.png"
            alt="Cycle"
            className="Cycle"
            initial={{ x: '-100vw', y: '35vh' }}
            animate={{ x: ['-100vw', '0vw'] }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 1],
            }}
          />
          <h1 className="frame-title">Frame 1 Title</h1>
        </div>
      )}

      {showFrames.frame2 && (
        <div className="frame">
          <motion.img
            src="src/assets/kids.png"
            alt="Kids"
            className="kids"
            initial={{ y: '100vh' }}
            animate={{ y: ['100vh', '0vh'] }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.5, 2.5],
            }}
          />
          <motion.img
            src="src/assets/path.png"
            alt="Path"
            className="path"
            initial={{ y: '30vh' }}
            animate={{ y: '10vh' }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />
          <h1 className="frame-title">Frame 2 Title</h1>
        </div>
      )}

      {showFrames.frame3 && (
        <div className="frame">
          <motion.img
            src="src/assets/kids.png"
            alt="Kids"
            className="kids"
            initial={{ y: '100vh' }}
            animate={{ y: ['100vh', '0vh'] }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.5, 2.5],
            }}
          />
          <motion.img
            src="src/assets/path.png"
            alt="Path"
            className="path"
            initial={{ y: '30vh' }}
            animate={{ y: '10vh' }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />
          <motion.img
            src="src/assets/CloseAlien.png"
            alt="Alien"
            className="alien"
            initial={{ y: '-30vh', scale: 1.8, opacity: 0 }}
            animate={{ y: '-5vh', scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              opacity: { duration: 2 },
            }}
          />
          <h1 className="frame-title">Frame 3 Title</h1>
        </div>
      )}

      {showFrames.frame4 && (
        <div className="frame">
          <motion.img
            src="src/assets/treetrunk.png"
            alt="Tree Trunk"
            className="treetrunk"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0],
            }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />
          <h1 className="frame-title">Frame 4 Title</h1>
        </div>
      )}
    </div>
  );
}