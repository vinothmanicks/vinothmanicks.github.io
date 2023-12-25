'use client';

import React from 'react';
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";

interface HeaderProps {}

export default function Header({}: HeaderProps) {

  return (
    <header className="p-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div initial={{x: -500, opacity: 0, scale: 0.5}} animate={{x: 0, opacity: 1, scale: 1}} transition={{duration: 1}}
        className="flex flex-row items-center cursor-pointer">
        {/*<SocialIcon url="https://github.com/vinothmanicks" fgColor="gray" bgColor="transparent"/>*/}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon url="https://github.com/vinothmanicks" fgColor="gray" bgColor="transparent"/>
        <SocialIcon url="https://www.linkedin.com/in/vinothkumar-manickavasagam/" fgColor="gray" bgColor="transparent"/>
      </motion.div>
    </header>
  );
}