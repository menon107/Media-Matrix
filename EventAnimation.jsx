import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './EventAnimation.css';

export default function EventAnimation({ setBlackBackground }) {
    const [showTrees, setShowTrees] = useState(false); 
    const [showRunning, setShowRunning] = useState(false);
    const [treesExit, setTreesExit] = useState(false); 
    const [showMonster, setShowMonster] = useState(false); 

    useEffect(() => {
        // Set black background for 1 second
        const blackBackgroundTimeout = setTimeout(() => {
            setBlackBackground(false);  // Revert background after 1 second
            setShowTrees(true);  // Show trees after the background turns back to normal
        }, 1000); 

        // Show running image after trees appear
        const runningTimeout = setTimeout(() => {
            setShowRunning(true);
        }, 2500); 

        // Trees disappear sideways after running image is shown
        const treesExitTimeout = setTimeout(() => {
            setTreesExit(true);
            setShowRunning(false);  // Running image moves off screen
        }, 5000); 

        // Show monster image after trees disappear
        const monsterTimeout = setTimeout(() => {
            setShowMonster(true);
        }, 7000); 

        // Monster disappears after 2 seconds
        const monsterDisappearTimeout = setTimeout(() => {
            setShowMonster(false);
            setBlackBackground(true);
        }, 9000); 

        const blackbackgroundTimeout = setTimeout(() => {
            setBlackBackground(false);
        }, 10000);

        // Clear timeouts when component unmounts
        return () => {
            clearTimeout(blackBackgroundTimeout);
            clearTimeout(runningTimeout);
            clearTimeout(treesExitTimeout);
            clearTimeout(monsterTimeout);
            clearTimeout(monsterDisappearTimeout);
            clearTimeout(blackbackgroundTimeout);
        };
    }, [setBlackBackground]);

    return (
        <div className="animation-container">
            {showTrees && (
                <>
                    <motion.img
                        src="src/assets/BigTreesDown.png"
                        alt="Big Trees"
                        className="big-trees-down"
                        initial={{ scale: 2 }} // Start big (not visible)
                        animate={{ scale: treesExit ? 3 : 1 }} // Shrinks to normal size
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="src/assets/LeftDown.png"
                        alt="Left Tree"
                        className="left-tree-down"
                        initial={{ x: '-100vw' }} // Start from the left
                        animate={{ x: treesExit ? '-100vw' : '0vw' }} // Moves in and exits the same way
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                    />
                    <motion.img
                        src="src/assets/RightDown.png"
                        alt="Right Tree"
                        className="right-tree-down"
                        initial={{ x: '100vw' }} // Start from the right
                        animate={{ x: treesExit ? '100vw' : '0vw' }} // Moves in and exits the same way
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                    />
                </>
            )}

            {showRunning && (
                <motion.img
                    src="src/assets/RunningDown.png"
                    alt="Running"
                    className="running-down"
                    initial={{ x: '-100vw', y: '0vh' }} 
                    animate={{ x: ['-100vw', '0vw', '100vw'] }} 
                    transition={{
                        duration: 3, 
                        ease: "easeInOut",
                        times: [0, 0.5, 1] 
                    }}
                />
            )}

            {showMonster && (
                <motion.img
                    src="src/assets/Monster.png"
                    alt="Monster"
                    className="monster-down"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }} 
                    transition={{
                        duration: 3, // Appears for 2 seconds, disappears
                        ease: "easeInOut"
                    }}
                />
            )}
        </div>
    );
}
