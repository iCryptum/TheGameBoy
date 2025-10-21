import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-white hover:text-[#FF6700] transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#process', label: 'Process' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1A1A1A]/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center text-white">
              <img className="h-12 w-auto mr-3" src="https://i.ibb.co/60hRLwK7/Logo.png" alt="The Game Boy Logo" />
              <div>
                <h1 className="text-lg font-bold tracking-wider">The Game Boy</h1>
                <p className="text-xs text-gray-400 tracking-widest">Wherever You Roam</p>
              </div>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="https://api.whatsapp.com/send?phone=12313921142"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6700] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#FFA040] transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
                <NavLink key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</NavLink>
            ))}
          </div>
          <div className="pb-3 px-2">
             <a
              href="https://api.whatsapp.com/send?phone=12313921142"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full bg-[#FF6700] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#FFA040] transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;