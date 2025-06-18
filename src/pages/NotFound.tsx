
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen racing-gradient">
      <div className="racing-stripe"></div>
      <div className="bg-paper-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="racing-border-gradient mb-8">
            <div className="p-8">
              <h1 className="font-orbitron font-bold text-6xl sm:text-8xl racing-text-gradient mb-4">404</h1>
              <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">Page Not Found</h2>
              <p className="text-gray-700 font-rajdhani text-sm sm:text-base mb-6">
                Oops! The page you're looking for has taken a different trail. Let's get you back on track!
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="racing-gradient hover:scale-105 transition-transform font-rajdhani font-semibold text-white"
              >
                🏠 Return to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="racing-stripe"></div>
    </div>
  );
};

export default NotFound;
