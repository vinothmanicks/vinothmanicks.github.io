'use client';

import React from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from "src/components/backgroundCircles";

interface HeroProps {}

export default function Hero({}: HeroProps) {
  const [text, count] = useTypewriter({
    words: [
      'Hello, World!',
      'Name\'s Vinoth',
    ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
      {/*<BackgroundCircles />*/}
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0a' cursorBlinking={false}/>
      </h1>
    </div>
  );
}