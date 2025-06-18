
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      title: "Procedural Generation",
      description: "Every ride is unique with our advanced procedural world generation system. No two runs are ever the same, ensuring endless replayability and fresh challenges.",
      icon: "🌍"
    },
    {
      title: "Physics-Based Gameplay",
      description: "Experience realistic bike physics that respond to every jump, turn, and crash. Master the art of momentum and balance to become the ultimate rider.",
      icon: "⚡"
    },
    {
      title: "Extreme Downhill Action",
      description: "Race down steep mountain slopes, navigate treacherous terrain, and perform death-defying stunts in this adrenaline-pumping downhill adventure.",
      icon: "🏔️"
    },
    {
      title: "Customizable Riders",
      description: "Personalize your character and bike with various customization options. Stand out from the crowd with unique gear and style combinations.",
      icon: "🎨"
    },
    {
      title: "Multiple Game Modes",
      description: "Challenge yourself across different game modes, from casual exploration to intense time trials and stunt challenges.",
      icon: "🎮"
    },
    {
      title: "Stunning Visuals",
      description: "Immerse yourself in beautiful, dynamic environments with realistic lighting and particle effects that bring every ride to life.",
      icon: "✨"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 gaming-text-gradient">
            Game Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
            Discover what makes Descenders the ultimate extreme mountain biking experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 hover:border-gaming-purple/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="font-orbitron font-bold text-xl text-white group-hover:text-gaming-purple transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-rajdhani leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
