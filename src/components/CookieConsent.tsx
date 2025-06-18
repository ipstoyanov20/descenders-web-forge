
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <Card className="bg-gray-900/95 border-gaming-purple/50 backdrop-blur-md">
        <CardContent className="p-6">
          <h3 className="font-orbitron font-bold text-white mb-2">🍪 Cookie Policy</h3>
          <p className="text-gray-300 font-rajdhani text-sm mb-4 leading-relaxed">
            We use cookies to enhance your gaming experience, analyze site traffic, and personalize content. 
            By continuing to use our site, you consent to our use of cookies.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              onClick={acceptCookies}
              className="gaming-gradient hover:scale-105 transition-transform font-rajdhani font-semibold flex-1"
            >
              Accept All
            </Button>
            <Button 
              onClick={declineCookies}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 font-rajdhani flex-1"
            >
              Decline
            </Button>
          </div>
          <p className="text-gray-500 font-rajdhani text-xs mt-2">
            <a href="/cookies/" className="hover:text-gaming-purple transition-colors">
              Read our full Cookies Policy
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
