
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gaming-purple/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-4 sm:right-16 w-20 h-20 sm:w-32 sm:h-32 bg-gaming-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gaming-orange/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-shadow leading-tight">
            <span className="gaming-text-gradient">DESCENDERS</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 font-rajdhani font-medium leading-relaxed px-4 sm:px-0">
            Experience the ultimate extreme downhill mountain biking adventure. 
            Navigate procedurally generated worlds with physics-based gameplay 
            that will test your skills and push your limits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="gaming-gradient hover:scale-105 transition-all duration-300 neon-glow font-rajdhani font-bold text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
              onClick={() => window.open('https://apps.apple.com/us/app/descenders/id1604675493', '_blank')}
            >
              Download in app store
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white transition-all duration-300 font-rajdhani font-bold text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-orbitron font-bold gaming-text-gradient mb-2">∞</div>
              <p className="text-gray-400 font-rajdhani text-sm sm:text-base">Procedural Worlds</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-orbitron font-bold gaming-text-gradient mb-2">⚡</div>
              <p className="text-gray-400 font-rajdhani text-sm sm:text-base">Physics-Based</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-orbitron font-bold gaming-text-gradient mb-2">🏆</div>
              <p className="text-gray-400 font-rajdhani text-sm sm:text-base">Extreme Sports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
