
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gaming-purple/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-gaming-purple to-gaming-blue rounded-lg flex items-center justify-center">
              <img src='/favicon.ico' className="text-white font-orbitron font-bold text-base sm:text-lg" />
            </div>
            <h1 className="font-orbitron font-bold text-lg sm:text-2xl gaming-text-gradient">
              DESCENDERS
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium text-sm xl:text-base"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium text-sm xl:text-base"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium text-sm xl:text-base"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium text-sm xl:text-base"
            >
              News
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium text-sm xl:text-base"
            >
              Contact
            </button>
          </div>

          {/* Desktop Download Button */}
          <Button 
            className="hidden sm:flex gaming-gradient hover:scale-105 transition-transform font-rajdhani font-semibold px-4 lg:px-6 text-sm lg:text-base"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.noodlecake.descenders', '_blank')}
          >
            Download
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gaming-purple/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium text-left"
              >
                News
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gaming-purple transition-colors font-rajdhani font-medium text-left"
              >
                Contact
              </button>
              <Button 
                className="gaming-gradient hover:scale-105 transition-transform font-rajdhani font-semibold mt-4 w-full"
                onClick={() => {
                  window.open('https://play.google.com/store/apps/details?id=com.noodlecake.descenders', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                Download Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
