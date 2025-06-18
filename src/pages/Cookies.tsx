
import { Button } from '@/components/ui/button';

const Cookies = () => {
  return (
    <div className="min-h-screen racing-gradient">
      <div className="racing-stripe"></div>
      <div className="bg-paper-white min-h-screen">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <Button 
                onClick={() => window.history.back()}
                variant="outline"
                className="border-racing-red text-racing-red hover:bg-racing-red hover:text-white font-rajdhani mb-6 text-sm sm:text-base"
              >
                ← Back to Home
              </Button>
              <div className="racing-border-gradient mb-6">
                <div className="p-6 sm:p-8">
                  <h1 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl racing-text-gradient mb-4">
                    Cookies Policy
                  </h1>
                  <p className="text-gray-600 font-rajdhani text-sm sm:text-base">
                    Last updated: December 18, 2024
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="racing-border-gradient">
                <div className="p-6 sm:p-8">
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">What Are Cookies?</h2>
                  <p className="text-gray-700 leading-relaxed font-rajdhani text-sm sm:text-base">
                    Cookies are small text files that are stored on your device when you visit our website or play our games. They help us provide you with a better experience by remembering your preferences, analyzing how you use our services, and improving our game performance. This Cookies Policy explains how Noodlecake Studios Inc uses cookies in connection with Descenders and our website.
                  </p>
                </div>
              </div>

              <div className="racing-border-gradient">
                <div className="p-6 sm:p-8">
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-orbitron font-semibold text-lg text-racing-red-dark mb-2">Essential Cookies</h3>
                      <p className="text-gray-700 leading-relaxed font-rajdhani text-sm sm:text-base">
                        These cookies are necessary for the basic functioning of our game and website. They enable core features like security, network management, and accessibility.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-orbitron font-semibold text-lg text-racing-red-dark mb-2">Performance Cookies</h3>
                      <p className="text-gray-700 leading-relaxed font-rajdhani text-sm sm:text-base">
                        These cookies help us understand how players interact with our game by collecting information about gameplay patterns and user behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="racing-border-gradient">
                <div className="p-6 sm:p-8">
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">Managing Cookies</h2>
                  <p className="text-gray-700 leading-relaxed mb-4 font-rajdhani text-sm sm:text-base">
                    You can manage cookies through:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 font-rajdhani text-sm sm:text-base">
                    <li>Using our cookie consent banner</li>
                    <li>Adjusting your browser settings</li>
                    <li>Using browser extensions that block cookies</li>
                  </ul>
                </div>
              </div>

              <div className="racing-border-gradient">
                <div className="p-6 sm:p-8">
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4 font-rajdhani text-sm sm:text-base">
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="bg-paper-gray p-4 sm:p-6 rounded-lg paper-shadow">
                    <p className="text-racing-red font-rajdhani font-bold text-sm sm:text-base"><strong>Noodlecake Studios Inc</strong></p>
                    <p className="text-gray-700 font-rajdhani text-sm sm:text-base">Email: support@noodlecake.com</p>
                    <p className="text-gray-700 font-rajdhani text-sm sm:text-base">Address: 207-262 Avenue B S, Saskatoon, SK S7M 1M4, Canada</p>
                    <p className="text-gray-700 font-rajdhani text-sm sm:text-base">Phone: +1 306-518-7625</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="racing-stripe"></div>
      </div>
    </div>
  );
};

export default Cookies;
