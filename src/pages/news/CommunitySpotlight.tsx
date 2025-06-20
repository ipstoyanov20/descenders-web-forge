import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CommunitySpotlight = () => {
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
                src="https://cdn.akamai.steamstatic.com/steam/apps/466860/ss_41e3c83dcebfb6a6d6bf5b87abf1b7c0c6d57bd7.1920x1080.jpg"
                alt="Descenders community highlights"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="bg-racing-red text-white px-3 py-1 rounded-full text-xs font-rajdhani font-semibold">
                  Community
                </span>
                <span className="text-gray-500 text-sm font-rajdhani">
                  November 28, 2024 • 4 min read
                </span>
              </div>

              <h1 className="font-orbitron font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 racing-text-gradient">
                Community Spotlight: Best User-Created Moments
              </h1>

              <div className="prose prose-lg max-w-none font-rajdhani text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  The Descenders community never ceases to amaze us with their incredible skills, creativity, and passion for extreme mountain biking. This month, we're highlighting some of the most spectacular moments captured by our amazing riders.
                </p>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">Epic Wins and Spectacular Fails</h2>
                <p className="mb-4">
                  From death-defying jumps to hilarious crashes, our community has shared some truly unforgettable moments. These clips showcase not just the skill of our players, but the pure joy and excitement that Descenders brings to riders around the world.
                </p>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">Featured Community Members</h2>
                <p className="mb-6">
                  This month we're celebrating riders who have pushed the boundaries of what's possible in Descenders. Their creativity and determination inspire us all to keep pushing our limits and trying new things.
                </p>

                <h2 className="font-orbitron font-bold text-xl sm:text-2xl racing-text-gradient mb-4">Share Your Moments</h2>
                <p className="mb-6">
                  Have you captured an incredible moment in Descenders? We'd love to see it! Share your best clips and screenshots with the community using #DescendersGame on social media.
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
                    → Join the Official Descenders Discord
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

export default CommunitySpotlight;
