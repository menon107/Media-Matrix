import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './HomeAnimation.css';

export default function HomeAnimation({ setBlackBackground }) {
    const [showTreeTrunk, setShowTreeTrunk] = useState(false);
    const [showEverything, setShowEverything] = useState(false); 
    const [showKids, setShowKids] = useState(false); 
    const [treesExit, setTreesExit] = useState(false); 
    const [showTrees, setShowTrees] = useState(true); 
    const [kidsReturn, setKidsReturn] = useState(false); 
    const [alienAppears, setAlienAppears] = useState(false); 

    const startAnimation = () => {
        // Reset all states
        setShowTreeTrunk(false);
        setShowEverything(false);
        setShowKids(false);
        setTreesExit(false);
        setShowTrees(true);
        setKidsReturn(false);
        setAlienAppears(false);
        
        // Start the animation sequence
        setTimeout(() => {
            setShowKids(true); 
        }, 1500); 
        
        setTimeout(() => {
            setTreesExit(true);
            setKidsReturn(true);
        }, 3500); 
        
        setTimeout(() => {
            setShowTrees(false); 
            setShowEverything(true); 
        }, 4500); 
        
        setTimeout(() => {
            setAlienAppears(true); 
        }, 7000); 
        
        setTimeout(() => {
            setKidsReturn(false); 
            setAlienAppears(false); 
            setShowEverything(false); 
            setBlackBackground(true);  
        }, 10000); 
        
        setTimeout(() => {
            setShowTreeTrunk(true); 
        }, 11000);
        
        setTimeout(() => {
            setShowTreeTrunk(false); 
            setBlackBackground(false); 
        }, 14000);
    };

    useEffect(() => {
        startAnimation(); // Start the animation on mount
        
        const resetTimeout = setTimeout(() => {
            startAnimation(); // Restart the animation after it finishes
        }, 14000); // Match this duration with the total duration of the animation

        return () => clearTimeout(resetTimeout);
    }, [setBlackBackground]);

    return (
        <div className="animation-container">
            {showTrees && (
                <>
                    <motion.img
                        src="src/assets/BigTrees.png"
                        alt="Big Trees"
                        className="big-trees"
                        initial={{ scale: 2 }} 
                        animate={{ scale: treesExit ? 3 : 1 }} 
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="src/assets/Left.png"
                        alt="Left Tree"
                        className="left-tree"
                        initial={{ x: '-100vw' }} 
                        animate={{ x: treesExit ? '-100vw' : '0vw' }} 
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                    />
                    <motion.img
                        src="src/assets/Right.png"
                        alt="Right Tree"
                        className="right-tree"
                        initial={{ x: '100vw' }} 
                        animate={{ x: treesExit ? '100vw' : '0vw' }} 
                        transition={{ duration: 1.5, ease: "easeInOut" }} 
                    />
                </>
            )}

            {showKids && (
                <motion.img
                    src="src/assets/Cycle.png"
                    alt="Cycle"
                    className="Cycle"
                    initial={{ x: '-100vw', y: '35vh'}} 
                    animate={{ x: ['-100vw', '0vw', '100vw'] }} 
                    transition={{
                        duration: 3, 
                        ease: "easeInOut",
                        times: [0, 0.5, 1] 
                    }}
                />
            )}

            {kidsReturn && (
                <>
                    <motion.img
                        src="src/assets/kids.png"
                        alt="Kids"
                        className="kids"
                        initial={{ y: '100vh' }} 
                        animate={{ y: ['100vh', '0vh'] }} 
                        transition={{
                            duration: 3, 
                            ease: "easeInOut",
                            times: [0, 0.5, 2.5],
                        }}
                    />
                    <motion.img 
                        src="src/assets/path.png" 
                        alt="Path" 
                        className="path"
                        initial={{ y: '30vh' }} 
                        animate={{ y: '10vh' }} 
                        transition={{ duration: 3, ease: "easeInOut" }}
                    />
                </>
            )}

            {alienAppears && (
                <motion.img
                    src="src/assets/CloseAlien.png"
                    alt="Alien"
                    className="alien"
                    initial={{ y: '-30vh', scale: 1.8, opacity: 0 }}  
                    animate={{ y: '-5vh', scale: 1, opacity: 1 }}  
                    exit={{ opacity: 0 }}  
                    transition={{
                        duration: 3,  
                        ease: "easeInOut",
                        opacity: { duration: 2 },  
                    }}
                    onAnimationComplete={() => {
                        setTimeout(() => {
                            setAlienAppears(false);
                        }, 1000);
                    }}
                />
            )}


            {showTreeTrunk && (
                <motion.img
                    src="src/assets/treetrunk.png"
                    alt="Tree Trunk"
                    className="treetrunk"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 1, 0] }} 
                    transition={{
                        duration: 3, 
                        ease: "easeInOut"
                    }}
                />
            )}
        </div>
    );
}