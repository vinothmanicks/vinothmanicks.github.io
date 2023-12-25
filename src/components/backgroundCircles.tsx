import { motion } from 'framer-motion';
import React from 'react'

interface BackgroundCirclesProps {}

export default function BackgroundCircles({}: BackgroundCirclesProps) {
  return(
    <motion.div
    initial={{
      opacity: 0.5
    }}
    animate={{
      // scale: [1,2,2,3,1],
      opacity: [0.2, 0.5, 0.2, 0.8, 0.5, 1.0]
      // border
    }}
    transition={{
      duration: 2.5
    }}
      className='relative flex justify-center items-center'>
      <div className='absolute border border-amber-200 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
      <div className='absolute border border-gray-700 rounded-full h-[350px] w-[350px] mt-52'/>
      <div className='absolute border border-gray-700 rounded-full h-[550px] w-[550px] mt-52'/>
      <div className='absolute border border-gray-700 opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
      <div className='absolute border border-gray-700 rounded-full h-[800px] w-[800px] mt-52'/>

    </motion.div>
  );
}