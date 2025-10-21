import React from 'react';

const FloatingWhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=12313921142"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-40"
            aria-label="Chat on WhatsApp"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png?20220228223904"
                alt="Chat on WhatsApp"
                className="w-9 h-9"
            />
        </a>
    );
};

export default FloatingWhatsAppButton;