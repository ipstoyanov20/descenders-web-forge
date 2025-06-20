
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          <div className="md:col-span-2 xl:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-gaming-purple to-gaming-blue rounded-lg flex items-center justify-center">
                <img src='/favicon.ico' className="text-white font-orbitron rounded-lg font-bold text-base sm:text-lg" />
              </div>
              <h3 className="font-orbitron font-bold text-xl sm:text-2xl gaming-text-gradient">
                DESCENDERS
              </h3>
            </div>
            <p className="text-gray-400 font-rajdhani leading-relaxed mb-4 text-sm sm:text-base">
              Experience the ultimate extreme downhill mountain biking adventure with 
              procedurally generated worlds and physics-based gameplay.
            </p>
            <p className="text-gray-500 font-rajdhani text-xs sm:text-sm">
              Developed by Noodlecake Studios Inc
            </p>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 font-rajdhani">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-gaming-purple transition-colors text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-gaming-purple transition-colors text-sm sm:text-base"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-gaming-purple transition-colors text-sm sm:text-base"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-gaming-purple transition-colors text-sm sm:text-base"
                >
                  News
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 font-rajdhani">
              <li>
                <a 
                  href="/privacy/" 
                  className="text-gray-400 hover:text-gaming-purple transition-colors text-sm sm:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms/" 
                  className="text-gray-400 hover:text-gaming-purple transition-colors text-sm sm:text-base"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="/cookies/" 
                  className="text-gray-400 hover:text-gaming-purple transition-colors text-sm sm:text-base"
                >
                  Cookies Policy
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@noodlecake.com" 
                  className="text-gray-400 hover:text-gaming-purple transition-colors text-sm sm:text-base"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 font-rajdhani text-xs sm:text-sm leading-relaxed">
            © {currentYear} Noodlecake Studios Inc. All rights reserved. | 
            207-262 Avenue B S, Saskatoon, SK S7M 1M4, Canada | 
            Phone: +1 306-518-7625
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
