
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gaming-purple/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gaming-purple to-gaming-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-lg">D</span>
            </div>
            <h1 className="font-orbitron font-bold text-2xl gaming-text-gradient">
              DESCENDERS
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium"
            >
              News
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium"
            >
              Contact
            </button>
          </div>

          <Button 
            className="gaming-gradient hover:scale-105 transition-transform font-rajdhani font-semibold px-6"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.noodlecake.descenders', '_blank')}
          >
            Download Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
