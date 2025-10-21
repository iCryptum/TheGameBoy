import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="about" className="py-20 sm:py-32">
      <div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-1000"
        style={{
          opacity: controls.opacity,
          transform: `translateY(${controls.y}px)`,
        }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">About / History</h2>
          <div className="mt-4 h-1 w-24 bg-[#FF6700] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              I'm a professional butcher and amateur hunter. I began skinning and processing deer in 1997 at Burritt's Market in Traverse City, Michigan when I was 16 years old.
            </p>
            <p>
              Some of you may recognize me from my 12-season tenure there, where I honed my knife skills and personally skinned over 5,000 deer — including elk, moose, and caribou from Canada.
            </p>
            <p className="font-semibold text-white">
              Your deer will be skinned, processed, and packaged within 2½ hours at most.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://i.ibb.co/fcyGxj4/fcc14d49-31e2-4f2c-aaca-e92ec9d23c5f.jpg"
                alt="Lukas Bethea, professional butcher" 
                className="object-cover w-full h-auto max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;