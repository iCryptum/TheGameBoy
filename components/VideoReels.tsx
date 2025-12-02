import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const videos = [
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1164638522404156&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F840829918907973&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1462149461748230&show_text=false&width=267&t=0"
];

const VideoReels: React.FC = () => {
    const { ref, controls } = useScrollAnimation();

    return (
        <section className="py-10 bg-[#1A1A1A]">
            <div
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-1000"
                style={{
                    opacity: controls.opacity,
                    transform: `translateY(${controls.y}px)`,
                }}
            >
                <div className="text-center mb-10">
                     <h2 className="text-2xl font-bold text-white sm:text-3xl">In Action</h2>
                     <div className="mt-2 h-1 w-16 bg-[#FF6700] mx-auto"></div>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {videos.map((src, index) => (
                        <div key={index} className="w-[300px] h-[530px] rounded-lg overflow-hidden shadow-2xl border border-gray-800 bg-black">
                            <iframe
                                src={src}
                                width="100%"
                                height="100%"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoReels;
