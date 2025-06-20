
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProceduralGeneration = () => {
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
                src="https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_34a1183cdb9b0b86bb1dd2c83e7b2c70b45aa617.1920x1080.jpg"
                alt="Descenders procedural world generation"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="bg-racing-red text-white px-3 py-1 rounded-full text-xs font-rajdhani font-semibold">
                  Technology
                </span>
                <span className="text-gray-500 text-sm font-rajdhani">
                  December 10, 2024 • 7 min read
                </span>
              </div>

              <h1 className="font-orbitron font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 racing-text-gradient">
                The Art of Procedural World Generation
              </h1>

              <div className="prose prose-lg max-w-none font-rajdhani text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  One of Descenders' most impressive features is its procedural world generation system. Every time you start a new run, you're experiencing a completely unique world that has never existed before and will never exist again in exactly the same way.
                </p>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">How It Works</h2>
                <p className="mb-4">
                  Our advanced algorithms use a combination of noise functions, rule-based systems, and carefully crafted constraints to generate realistic and challenging mountain biking terrain.
                </p>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">The Challenge of Balance</h2>
                <p className="mb-6">
                  Creating procedural content that's both challenging and fair requires careful consideration of difficulty curves, flow, and player expectations. Every generated world must feel hand-crafted while maintaining the excitement of the unknown.
                </p>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">Endless Replayability</h2>
                <p className="mb-6">
                  This system ensures that Descenders offers virtually unlimited content. Whether you're a casual rider or a hardcore competitor, there's always a new challenge waiting around the corner.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-orbitron font-bold text-lg racing-text-gradient mb-4">Read More Related Articles</h3>
                <div className="space-y-2">
                  <Link to="/news/mastering-physics-controls" className="block text-racing-red hover:text-racing-red-dark transition-colors">
                    → Mastering Physics-Based Controls in Descenders
                  </Link>
                  <Link to="/news/community-spotlight" className="block text-racing-red hover:text-racing-red-dark transition-colors">
                    → Community Spotlight: Best User-Created Moments
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

export default ProceduralGeneration;
