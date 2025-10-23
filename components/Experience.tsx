import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-[#FF6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);

const ExperienceItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg">
        <div className="flex-shrink-0">
            <CheckIcon />
        </div>
        <p className="text-lg text-gray-300">{children}</p>
    </div>
);


const Experience: React.FC = () => {
    const { ref, controls } = useScrollAnimation();

    return (
        <section id="experience" className="py-20 sm:py-32 bg-black bg-opacity-20">
            <div 
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-1000"
                style={{
                    opacity: controls.opacity,
                    transform: `translateY(${controls.y}px)`,
                }}
            >
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Experience That Counts</h2>
                    <div className="mt-4 h-1 w-24 bg-[#FF6700] mx-auto"></div>
                    <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                        With over 25 years of experience in wild game processing, Loukas delivers unmatched precision and quality. From skinning to deboning and packaging, each deer is handled individually — ensuring integrity, freshness, and respect for your harvest.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ExperienceItem>
                        <span className="font-bold text-white">5,000+ deer</span> personally skinned
                    </ExperienceItem>
                    <ExperienceItem>
                        Mobile unit serving a <span className="font-bold text-white">45-mile radius</span>
                    </ExperienceItem>
                    <ExperienceItem>
                        <span className="font-bold text-white">10% off on 3+ deer</span> (perfect for hunting parties)
                    </ExperienceItem>
                    <ExperienceItem>
                        <span className="font-bold text-white">10% off</span> for veterans & active military
                    </ExperienceItem>
                </div>
            </div>
        </section>
    );
};

export default Experience;
