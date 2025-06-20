
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ExtremeStunts = () => {
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
                src="https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_6c94c5d42a4c39c4a7dad0d4d8b8fcce5f9e4b9e.1920x1080.jpg"
                alt="Descenders extreme stunts and tricks"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="bg-racing-red text-white px-3 py-1 rounded-full text-xs font-rajdhani font-semibold">
                  Guide
                </span>
                <span className="text-gray-500 text-sm font-rajdhani">
                  December 5, 2024 • 6 min read
                </span>
              </div>

              <h1 className="font-orbitron font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 racing-text-gradient">
                Top 10 Extreme Stunts You Can Pull Off
              </h1>

              <div className="prose prose-lg max-w-none font-rajdhani text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  Ready to take your Descenders skills to the next level? These jaw-dropping stunts will separate the pros from the beginners. Master these techniques and become a legend on the trails.
                </p>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">The Essential Stunts</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-red-50/50 p-4 rounded-lg">
                    <h3 className="font-bold text-racing-red mb-2">1. The Perfect Backflip</h3>
                    <p>Master the timing and rotation speed for clean backflips that will impress any audience.</p>
                  </div>
                  
                  <div className="bg-red-50/50 p-4 rounded-lg">
                    <h3 className="font-bold text-racing-red mb-2">2. Tailwhip Combinations</h3>
                    <p>Chain multiple tailwhips together for maximum style points and crowd appreciation.</p>
                  </div>
                  
                  <div className="bg-red-50/50 p-4 rounded-lg">
                    <h3 className="font-bold text-racing-red mb-2">3. Superman Extension</h3>
                    <p>Extend your body away from the bike mid-air for one of the most visually stunning tricks.</p>
                  </div>
                </div>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">Advanced Techniques</h2>
                <p className="mb-4">
                  Once you've mastered the basics, these advanced stunts will push your skills to the absolute limit. Remember, practice makes perfect, and every crash teaches you something new.
                </p>

                <p className="mb-6">
                  The key to executing these stunts successfully is understanding the physics engine and timing your inputs precisely. Start small and gradually work your way up to the most extreme tricks.
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
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="block text-racing-red hover:text-racing-red-dark transition-colors">
                    → Watch Professional Stunt Tutorials on YouTube
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

export default ExtremeStunts;
