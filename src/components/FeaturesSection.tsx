
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      title: "Procedural Generation",
      description: "Every ride is unique with our advanced procedural world generation system. No two runs are ever the same, ensuring endless replayability and fresh challenges.",
      icon: "https://cdn.akamai.steamstatic.com/steam/apps/466860/extras/Feature_ProcGen.png"
    },
    {
      title: "Physics-Based Gameplay",
      description: "Experience realistic bike physics that respond to every jump, turn, and crash. Master the art of momentum and balance to become the ultimate rider.",
      icon: "https://cdn.akamai.steamstatic.com/steam/apps/466860/extras/Feature_Physics.png"
    },
    {
      title: "Extreme Downhill Action",
      description: "Race down steep mountain slopes, navigate treacherous terrain, and perform death-defying stunts in this adrenaline-pumping downhill adventure.",
      icon: "https://cdn.akamai.steamstatic.com/steam/apps/466860/extras/Feature_Downhill.png"
    },
    {
      title: "Customizable Riders",
      description: "Personalize your character and bike with various customization options. Stand out from the crowd with unique gear and style combinations.",
      icon: "https://cdn.akamai.steamstatic.com/steam/apps/466860/extras/Feature_Custom.png"
    },
    {
      title: "Multiple Game Modes",
      description: "Challenge yourself across different game modes, from casual exploration to intense time trials and stunt challenges.",
      icon: "https://cdn.akamai.steamstatic.com/steam/apps/466860/extras/Feature_Modes.png"
    },
    {
      title: "Stunning Visuals",
      description: "Immerse yourself in beautiful, dynamic environments with realistic lighting and particle effects that bring every ride to life.",
      icon: "https://cdn.akamai.steamstatic.com/steam/apps/466860/extras/Feature_Visual.png"
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 racing-text-gradient">
            Game Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-rajdhani px-4">
            Discover what makes Descenders the ultimate extreme mountain biking experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/80 border-red-200 hover:border-racing-red/50 transition-all duration-300 hover:scale-105 group h-full paper-shadow"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 rounded-lg overflow-hidden">
                  <img 
                    src={feature.icon} 
                    alt={`${feature.title} icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-orbitron font-bold text-lg sm:text-xl text-gray-800 group-hover:text-racing-red transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-rajdhani leading-relaxed text-sm sm:text-base">
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
