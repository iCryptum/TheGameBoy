import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF6700] transition-colors duration-300">
        <span className="sr-only">{href.includes('facebook') ? 'Facebook' : 'Instagram'}</span>
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black bg-opacity-40">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-400">Copyright © 2025 The Game Boy Mobile Wild Game Processing</p>
                        <p className="text-sm text-gray-500">All Rights Reserved</p>
                    </div>
                    <div className="flex space-x-6">
                        <SocialIcon href="https://web.facebook.com/profile.php?id=61564444593030">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </SocialIcon>
                        <SocialIcon href="https://www.instagram.com/the_game_boy_231/">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 0C9.58 0 9.22.01 8.05.057c-1.19.053-2.203.24-3.136.573a6.87 6.87 0 00-2.65 1.622A6.87 6.87 0 00.64 5.058 8.82 8.82 0 00.067 8.05C.01 9.22 0 9.58 0 12s.01 2.78.057 3.95c.053 1.19.24 2.203.573 3.136a6.87 6.87 0 001.622 2.65 6.87 6.87 0 002.65 1.622c.933.333 1.946.52 3.136.573C9.22 23.99 9.58 24 12 24s2.78-.01 3.95-.057c1.19-.053 2.203-.24 3.136-.573a6.87 6.87 0 002.65-1.622 6.87 6.87 0 001.622-2.65c.333-.933.52-1.946.573-3.136C23.99 14.78 24 14.42 24 12s-.01-2.78-.057-3.95c-.053-1.19-.24-2.203-.573-3.136a6.87 6.87 0 00-1.622-2.65A6.87 6.87 0 0019.942.64a8.821 8.821 0 00-3.136-.573C14.78.01 14.42 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" />
                            </svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
