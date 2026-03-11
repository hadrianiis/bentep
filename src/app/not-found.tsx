'use client';

import React, { useState } from 'react';
import FuzzyText from '../components/FuzzyText';
import Link from 'next/link';

export default function NotFound() {
  const [hoverIntensity, setHoverIntensity] = useState(0.5);
  const [enableHover, setEnableHover] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <FuzzyText 
            baseIntensity={0.2} 
            hoverIntensity={hoverIntensity} 
            enableHover={enableHover}
            fontSize="clamp(4rem, 12vw, 12rem)"
            fontWeight={900}
            color="#000"
          >
            404
          </FuzzyText>
          
          <FuzzyText 
            baseIntensity={0.2} 
            hoverIntensity={hoverIntensity} 
            enableHover={enableHover}
            fontSize="clamp(1.5rem, 4vw, 3rem)"
            fontWeight={600}
            color="#000"
          >
            Stránka nenájdená
          </FuzzyText>
          
          
        </div>

        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Späť na hlavnú stránku
          </Link>
          
          <div className="text-sm text-gray-500">
          </div>
        </div>
      </div>
    </div>
  );
}
