
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gaming-purple/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gaming-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gaming-orange/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl mb-6 text-shadow">
            <span className="gaming-text-gradient">DESCENDERS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-rajdhani font-medium leading-relaxed">
            Experience the ultimate extreme downhill mountain biking adventure. 
            Navigate procedurally generated worlds with physics-based gameplay 
            that will test your skills and push your limits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="gaming-gradient hover:scale-105 transition-all duration-300 neon-glow font-rajdhani font-bold text-lg px-8 py-3"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.noodlecake.descenders', '_blank')}
            >
              Download Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white transition-all duration-300 font-rajdhani font-bold text-lg px-8 py-3"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold gaming-text-gradient mb-2">∞</div>
              <p className="text-gray-400 font-rajdhani">Procedural Worlds</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold gaming-text-gradient mb-2">⚡</div>
              <p className="text-gray-400 font-rajdhani">Physics-Based</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold gaming-text-gradient mb-2">🏆</div>
              <p className="text-gray-400 font-rajdhani">Extreme Sports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
