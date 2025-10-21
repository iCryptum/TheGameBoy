import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-[#1A1A1A] text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Process />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;