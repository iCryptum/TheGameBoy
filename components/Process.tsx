import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Step: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="relative flex flex-col items-center text-center">
        <div className="flex items-center justify-center w-20 h-20 border-2 border-[#FF6700] rounded-full bg-gray-800 text-[#FF6700] text-3xl font-bold mb-4">
            {number}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 max-w-xs">{children}</p>
    </div>
);

const Process: React.FC = () => {
    const { ref, controls } = useScrollAnimation();

    return (
        <section id="process" className="py-20 sm:py-32">
            <div 
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-1000"
                style={{
                    opacity: controls.opacity,
                    transform: `translateY(${controls.y}px)`,
                }}
            >
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">How It Works</h2>
                    <div className="mt-4 h-1 w-24 bg-[#FF6700] mx-auto"></div>
                    <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                        The Game Boy’s mobile processing unit travels within a 45-mile radius of Traverse City, Michigan. Equipped with professional butchering tools, it allows on-site processing — reducing transport stress and keeping your meat fresh. We set up wherever it’s most convenient: at your home, hunting camp, field, or buck pole. The Game Boy can also pick up your deer at your desired location and process it back at home.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute top-10 left-0 w-full h-0.5 bg-gray-700 hidden md:block"></div>
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                        <Step number="1" title="Schedule a Visit">
                            Contact us to book a time that's convenient for you.
                        </Step>
                        <Step number="2" title="On-Site Processing">
                            We come to your location with our fully-equipped mobile unit.
                        </Step>
                        <Step number="3" title="Packaged & Ready">
                            Receive your professionally packaged meat, ready for the freezer.
                        </Step>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
