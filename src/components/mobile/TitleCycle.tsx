// SlideTitleCycler.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/globals.scss';

const titles = [
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Wireframes + A/B Testing',
  'React',
  'React Native',
  'TypeScript',
  'Angular',
  'API Integration',
  'End to End Development',
  'Database Set Up',
  'Visual Design',
  'Blender + 3D Integrations',
  'Figma',
  'Adobe Illustrator'
];


const SlideTitleCycler = ({ interval = 5000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <div style={{height: 100, }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={titles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
         className='title-cycle'
        >
          {titles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideTitleCycler;
