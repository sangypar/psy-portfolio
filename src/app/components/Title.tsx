"use client";

import { useEffect, useState } from "react";

const Title = () => {
  const [text, setText] = useState('');
  const [isName, setIsName] = useState(true);

  useEffect(() => {
    const nameText = "Park Sang Yong";
    const devText = "developer";
    let currentText = isName ? nameText : devText;
    let currentIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      if (!isDeleting && currentIndex <= currentText.length) {
        setText(currentText.slice(0, currentIndex));
        currentIndex++;
 
        if (currentIndex > currentText.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else if (isDeleting && currentIndex >= 0) {
        setText(currentText.slice(0, currentIndex));
        currentIndex--;
      }

      if (currentIndex === 0 && isDeleting) {
        setTimeout(() => {
          isDeleting = false;
          setIsName(!isName);
        }, 300);
      }
    };

    const interval = setInterval(() => {
      typeEffect();
    }, 150);

    return () => clearInterval(interval);
  }, [isName]);

  return (
    <div className="h-full w-full relative flex items-center font-paperlogy">
 <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/back.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.7) brightness(0.9)', 
        }}
      />


<div className="relative z-10 w-full">
        <div className="text-9xl font-bold tracking-wide">
        <span className="text-white ml-16">I&apos;m</span>{' '}
          <span className="relative">
            {isName ? (
              <span className="text-custom-darkblue">{text}</span>
            ) : (
              <>
                <span className="text-white">a </span>
                <span className="text-custom-cream">{text}</span>
              </>
            )}
            <span className="absolute animate-cursor text-gray-950 font-serif">|</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Title;