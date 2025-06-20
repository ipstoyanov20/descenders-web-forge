
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PhysicsControls = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-paper-white to-red-50">
      <div className="racing-stripe"></div>
      
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-racing-red hover:bg-racing-red hover:text-white transition-all duration-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="bg-white/90 rounded-xl paper-shadow overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_615455299355eaf552c0d7b0b967d1e40a0ab227.1920x1080.jpg"
                alt="Descenders physics controls gameplay"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="bg-racing-red text-white px-3 py-1 rounded-full text-xs font-rajdhani font-semibold">
                  Tutorial
                </span>
                <span className="text-gray-500 text-sm font-rajdhani">
                  December 15, 2024 • 5 min read
                </span>
              </div>

              <h1 className="font-orbitron font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 racing-text-gradient">
                Mastering Physics-Based Controls in Descenders
              </h1>

              <div className="prose prose-lg max-w-none font-rajdhani text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  Descenders' physics-based control system is what sets it apart from other mountain biking games. Every movement feels authentic and requires skill to master. In this comprehensive guide, we'll break down the essential techniques you need to become a pro rider.
                </p>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">Understanding the Basics</h2>
                <p className="mb-4">
                  The key to mastering Descenders lies in understanding that your bike responds realistically to physics. Weight distribution, momentum, and timing are crucial for success.
                </p>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">Advanced Techniques</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Pre-loading jumps for maximum air time</li>
                  <li>Using body position to control landing</li>
                  <li>Mastering the pump technique for speed</li>
                  <li>Cornering at high speeds without losing control</li>
                </ul>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">Practice Makes Perfect</h2>
                <p className="mb-6">
                  Start with smaller jumps and gradually work your way up to more challenging terrain. Remember, every crash is a learning opportunity in Descenders!
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-orbitron font-bold text-lg racing-text-gradient mb-4">Read More Related Articles</h3>
                <div className="space-y-2">
                  <Link to="/news/extreme-stunts-guide" className="block text-racing-red hover:text-racing-red-dark transition-colors">
                    → Top 10 Extreme Stunts You Can Pull Off
                  </Link>
                  <Link to="/news/procedural-world-generation" className="block text-racing-red hover:text-racing-red-dark transition-colors">
                    → The Art of Procedural World Generation
                  </Link>
                  <a href="https://descenders.fandom.com/wiki/How_to_play_guide_for_Descenders" target="_blank" rel="noopener noreferrer" className="block text-racing-red hover:text-racing-red-dark transition-colors">
                    → How to Play Guide for Descenders
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      
      <div className="racing-stripe"></div>
    </div>
  );
};

export default PhysicsControls;
