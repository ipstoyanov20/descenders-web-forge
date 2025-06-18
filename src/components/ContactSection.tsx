
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 gaming-text-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
            Need support or have feedback? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-orbitron font-bold text-2xl mb-8 text-white">
              Developer Information
            </h3>
            
            <Card className="bg-gray-800/50 border-gray-700 mb-6">
              <CardHeader>
                <CardTitle className="font-orbitron text-gaming-purple flex items-center gap-3">
                  🏢 About Noodlecake Studios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 font-rajdhani">
                <p className="text-gray-300">
                  <strong className="text-white">Company:</strong> Noodlecake Studios Inc
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Email:</strong> accountowner@noodlecake.com
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Address:</strong> 207-262 Avenue B S, Saskatoon, SK S7M 1M4, Canada
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Phone:</strong> +1 306-518-7625
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="font-orbitron text-gaming-purple flex items-center gap-3">
                  🎮 App Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-rajdhani">
                <p className="text-gray-300">
                  For game-specific support, bug reports, or technical assistance:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <strong className="text-white">Support Email:</strong> support@noodlecake.com
                  </p>
                  <Button 
                    className="gaming-gradient hover:scale-105 transition-transform font-rajdhani font-semibold"
                    onClick={() => window.open('mailto:support@noodlecake.com?subject=Descenders Support Request', '_blank')}
                  >
                    Contact Support
                  </Button>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-300 mb-3">
                    <strong className="text-white">Privacy Policy:</strong>
                  </p>
                  <Button 
                    variant="outline"
                    className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white font-rajdhani"
                    onClick={() => window.open('/privacy/', '_blank')}
                  >
                    View Privacy Policy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="font-orbitron font-bold text-2xl mb-8 text-white">
              Quick Links
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-gaming-purple/20 to-gaming-blue/20 border-gaming-purple/30 hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">📱</div>
                  <h4 className="font-orbitron font-bold text-white mb-2">Download Game</h4>
                  <p className="text-gray-300 font-rajdhani text-sm mb-4">Get Descenders on Google Play</p>
                  <Button 
                    size="sm"
                    className="gaming-gradient font-rajdhani"
                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.noodlecake.descenders', '_blank')}
                  >
                    Play Store
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gaming-blue/20 to-gaming-orange/20 border-gaming-blue/30 hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">📄</div>
                  <h4 className="font-orbitron font-bold text-white mb-2">Terms & Policies</h4>
                  <p className="text-gray-300 font-rajdhani text-sm mb-4">Legal information</p>
                  <div className="space-y-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white font-rajdhani w-full"
                      onClick={() => window.open('/terms/', '_blank')}
                    >
                      Terms of Service
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white font-rajdhani w-full"
                      onClick={() => window.open('/cookies/', '_blank')}
                    >
                      Cookies Policy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-800/50 border-gray-700 mt-6">
              <CardHeader>
                <CardTitle className="font-orbitron text-gaming-purple">
                  🌟 Rate Our Game
                </CardTitle>
              </CardHeader>
              <CardContent className="font-rajdhani">
                <p className="text-gray-300 mb-4">
                  Loving Descenders? Help us by leaving a review on the Google Play Store!
                </p>
                <Button 
                  className="gaming-gradient hover:scale-105 transition-transform font-rajdhani font-semibold"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.noodlecake.descenders', '_blank')}
                >
                  Leave a Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
