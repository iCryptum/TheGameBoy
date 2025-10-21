import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
    const { ref, controls } = useScrollAnimation();

    return (
        <section id="home" className="hero-bg min-h-screen flex items-center justify-center">
            <div 
              ref={ref}
              className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-1000"
              style={{
                opacity: controls.opacity,
                transform: `translateY(${controls.y}px)`,
              }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    Professional Wild Game Processing
                    <span className="block text-[#FF6700] mt-2">Wherever You Roam</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    Mobile butchering and packaging services you can trust.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://api.whatsapp.com/send?phone=12313921142&text=I'd%20like%20to%20book%20my%20deer%20processing."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF6700] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FFA040] transition-colors duration-300 shadow-lg transform hover:scale-105"
                    >
                        Book Your Deer Processing
                    </a>
                </div>
                <div className="mt-8">
                  <p className="text-lg font-bold border-2 border-[#FF6700] inline-block px-4 py-2 rounded-md">
                      Boneless starting at $169
                  </p>
                </div>
                <p className="mt-12 text-sm text-gray-400 tracking-wider">
                    By Lukas Bethea — 25+ years of experience
                </p>
            </div>
        </section>
    );
};

export default Hero;