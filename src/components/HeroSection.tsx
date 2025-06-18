
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 bg-gradient-to-br from-paper-white via-red-50 to-paper-gray">
      <div className="racing-stripe absolute top-0 left-0 right-0"></div>
      <div className="racing-stripe absolute bottom-0 left-0 right-0"></div>
      
      {/* Racing barrier elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-racing-red/20 rounded-sm blur-sm animate-float paper-shadow"></div>
      <div className="absolute bottom-32 right-4 sm:right-16 w-20 h-20 sm:w-32 sm:h-32 bg-red-100 rounded-sm blur-sm animate-float paper-shadow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-racing-red/30 rounded-sm blur-sm animate-float paper-shadow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-shadow leading-tight">
            <span className="racing-text-gradient">DESCENDERS</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 font-rajdhani font-medium leading-relaxed px-4 sm:px-0">
            Experience the ultimate extreme downhill mountain biking adventure. 
            Navigate procedurally generated worlds with physics-based gameplay 
            that will test your skills and push your limits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="racing-gradient hover:scale-105 transition-all duration-300 paper-shadow font-rajdhani font-bold text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto text-white"
              onClick={() => window.open('https://apps.apple.com/us/app/descenders/id1604675493', '_blank')}
            >
              Download in app store
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-racing-red text-racing-red hover:bg-racing-red hover:text-white transition-all duration-300 font-rajdhani font-bold text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center bg-white/50 p-4 rounded-lg paper-shadow">
              <div className="text-2xl sm:text-3xl font-orbitron font-bold racing-text-gradient mb-2">∞</div>
              <p className="text-gray-600 font-rajdhani text-sm sm:text-base">Procedural Worlds</p>
            </div>
            <div className="text-center bg-white/50 p-4 rounded-lg paper-shadow">
              <div className="text-2xl sm:text-3xl font-orbitron font-bold racing-text-gradient mb-2">⚡</div>
              <p className="text-gray-600 font-rajdhani text-sm sm:text-base">Physics-Based</p>
            </div>
            <div className="text-center bg-white/50 p-4 rounded-lg paper-shadow">
              <div className="text-2xl sm:text-3xl font-orbitron font-bold racing-text-gradient mb-2">🏆</div>
              <p className="text-gray-600 font-rajdhani text-sm sm:text-base">Extreme Sports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
