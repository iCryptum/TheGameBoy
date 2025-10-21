import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const VenmoIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current text-cyan-400">
    <title>Venmo</title>
    <path d="M18.109 1.542c-1.63.003-3.238.38-4.717 1.09-3.268 1.57-5.122 4.88-5.34 8.707-.02.433-.04.866-.05 1.298H5.903c-.104.306-.21.61-.31.916H.5v1.83h4.63c.243.68.528 1.34.86 1.968h-5.1v1.83h4.755c2.47 4.502 7.155 6.45 11.964 5.305 4.81-1.146 8.02-5.74 7.915-10.743-.07-3.774-2.12-7.22-5.26-9.17-1.46-1.02-3.13-1.57-4.83-1.54zM8.28 12.332c.11-3.11 1.7-6.044 4.39-7.56 2.34-1.27 5.03-1.29 7.42-.05 2.61 1.34 4.26 4.09 4.38 7.02.15 3.59-1.92 6.82-5.14 7.82-3.22 1-6.6-1.05-7.98-4.08-.2-.45-.38-.92-.54-1.39H13.2c.24-.68.53-1.34.86-1.97H8.3c-.01-.22-.02-.43-.02-.65z"/>
  </svg>
);

const CashIcon = () => (
    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4v1h-4zm-2 12V6h8v12H6z"></path>
    </svg>
);

const Pricing: React.FC = () => {
    const { ref, controls } = useScrollAnimation();

    return (
        <section id="pricing" className="py-20 sm:py-32 bg-black bg-opacity-20">
            <div 
                ref={ref}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-1000"
                style={{
                    opacity: controls.opacity,
                    transform: `translateY(${controls.y}px)`,
                }}
            >
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Affordable, Transparent Pricing</h2>
                    <div className="mt-4 h-1 w-24 bg-[#FF6700] mx-auto"></div>
                    <p className="mt-8 text-4xl font-bold text-[#FF6700]">Boneless starting at $169</p>
                </div>

                <div className="text-center space-y-6">
                    <h3 className="text-xl font-semibold text-white">Available Discounts</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg text-gray-300">
                        <p className="bg-gray-800/50 p-4 rounded-lg">10% off on 3+ deer</p>
                        <p className="bg-gray-800/50 p-4 rounded-lg">10% off for all veterans and active military personnel</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-xl font-semibold text-white mb-4">Payment Methods</h3>
                    <div className="flex justify-center items-center gap-8">
                        <div className="flex items-center gap-2 text-lg">
                            <VenmoIcon />
                            <span>Venmo</span>
                        </div>
                        <div className="flex items-center gap-2 text-lg">
                            <CashIcon />
                            <span>Cash</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
