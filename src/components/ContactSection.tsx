
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 racing-text-gradient">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani px-4">
            Need support or have feedback? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-orbitron font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-white">
              Developer Information
            </h3>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors mb-6">
              <CardHeader>
                <CardTitle className="font-orbitron text-racing-red flex items-center gap-3 text-lg sm:text-xl">
                  🏢 About Noodlecake Studios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 font-rajdhani">
                <p className="text-gray-300 text-sm sm:text-base">
                  <strong className="text-white">Company:</strong> Noodlecake Studios Inc
                </p>
                <p className="text-gray-300 text-sm sm:text-base break-all">
                  <strong className="text-white">Email:</strong> accountowner@noodlecake.com
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  <strong className="text-white">Address:</strong> 207-262 Avenue B S, Saskatoon, SK S7M 1M4, Canada
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  <strong className="text-white">Phone:</strong> +1 306-518-7625
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardHeader>
                <CardTitle className="font-orbitron text-racing-red flex items-center gap-3 text-lg sm:text-xl">
                  🎮 App Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-rajdhani">
                <p className="text-gray-300 text-sm sm:text-base">
                  For game-specific support, bug reports, or technical assistance:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm sm:text-base break-all">
                    <strong className="text-white">Support Email:</strong> support@noodlecake.com
                  </p>
                  <Button 
                    className="racing-gradient hover:scale-105 transition-transform font-rajdhani font-semibold w-full sm:w-auto text-white"
                    onClick={() => window.open('mailto:support@noodlecake.com?subject=Descenders Support Request', '_blank')}
                  >
                    Contact Support
                  </Button>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-300 mb-3 text-sm sm:text-base">
                    <strong className="text-white">Privacy Policy:</strong>
                  </p>
                  <Link to="/privacy">
                    <Button 
                      variant="outline"
                      className="border-racing-red text-racing-red hover:bg-racing-red hover:text-white transition-colors font-rajdhani w-full sm:w-auto"
                    >
                      View Privacy Policy
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="font-orbitron font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-white">
              Quick Links
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4 mb-6">
              <Card className="bg-gradient-to-br from-racing-red/20 to-paper-white/10 border-racing-red/30 hover:scale-105 hover:from-racing-red/30 hover:to-paper-white/20 transition-all cursor-pointer">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl mb-3">📱</div>
                  <h4 className="font-orbitron font-bold text-white mb-2 text-sm sm:text-base">Download Game</h4>
                  <p className="text-black font-rajdhani text-xs sm:text-sm mb-4">Get Descenders on Google Play</p>
                  <Button 
                    size="sm"
                    className="racing-gradient hover:scale-105 transition-transform font-rajdhani text-xs sm:text-sm w-full text-white"
                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.noodlecake.descenders', '_blank')}
                  >
                    Play Store
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-paper-white/20 to-racing-red/10 border-paper-white/30 hover:scale-105 hover:from-paper-white/30 hover:to-racing-red/20 transition-all cursor-pointer">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl mb-3">📄</div>
                  <h4 className="font-orbitron font-bold text-white mb-2 text-sm sm:text-base">Terms & Policies</h4>
                  <p className="text-black font-rajdhani text-xs sm:text-sm mb-4">Legal information</p>
                  <div className="space-y-2">
                    <Link to="/terms">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-racing-red mb-3 text-racing-red hover:bg-racing-red hover:text-white transition-colors font-rajdhani w-full text-xs sm:text-sm"
                      >
                        Terms of Service
                      </Button>
                    </Link>
                    <Link to="/cookies">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-racing-red text-racing-red hover:bg-racing-red hover:text-white transition-colors font-rajdhani w-full text-xs sm:text-sm"
                      >
                        Cookies Policy
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardHeader>
                <CardTitle className="font-orbitron text-racing-red text-lg sm:text-xl">
                  🌟 Rate Our Game
                </CardTitle>
              </CardHeader>
              <CardContent className="font-rajdhani">
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Loving Descenders? Help us by leaving a review on the Google Play Store!
                </p>
                <Button 
                  className="racing-gradient hover:scale-105 transition-transform font-rajdhani font-semibold w-full sm:w-auto text-white"
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
