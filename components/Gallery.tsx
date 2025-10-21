import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const images = [
    'https://i.ibb.co/jvYfhJkr/d3f8bc65-c41c-48e5-997c-a5bc5b3f04eb.jpg',
    'https://i.ibb.co/svQ3cN2G/bd15014c-c4d8-4f2d-8091-e8517471a601.jpg',
    'https://i.ibb.co/7dqMWJTT/976e3121-e5a5-41fc-b003-6d4d806c685e.jpg',
    'https://i.ibb.co/cXZGGp4b/546ac690-3e91-4d8c-ac32-50c973a60e7d.jpg',
    'https://i.ibb.co/3yrZ0V33/059b8b45-7ec0-4ddf-8042-3a6466bbad9b.jpg',
    'https://i.ibb.co/ch2dVNkV/41ddc6d0-7375-44c7-a342-0efe31614743.jpg',
    'https://i.ibb.co/cSyLBKVn/0ae8e856-9649-413b-8eca-b6b74cf56c44.jpg',
    'https://i.ibb.co/q3Z1CCJB/32e259db-5c91-40d4-b4b1-166cbc05811d.jpg',
    'https://i.ibb.co/fcyGxj4/fcc14d49-31e2-4f2c-aaca-e92ec9d23c5f.jpg'
];

const Gallery: React.FC = () => {
    const { ref, controls } = useScrollAnimation();

    return (
        <section id="gallery" className="py-20 sm:py-32 bg-black bg-opacity-20">
            <div
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-1000"
                style={{
                    opacity: controls.opacity,
                    transform: `translateY(${controls.y}px)`,
                }}
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Gallery</h2>
                    <div className="mt-4 h-1 w-24 bg-[#FF6700] mx-auto"></div>
                    <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        A glimpse into our process and the quality you can expect. From the field to your freezer, we handle every step with care and expertise.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-500"
                            />
                             <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
