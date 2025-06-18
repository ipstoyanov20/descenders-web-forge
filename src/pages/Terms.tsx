
import { Button } from '@/components/ui/button';

const Terms = () => {
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
                    Terms of Service
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
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed font-rajdhani text-sm sm:text-base">
                    By downloading, installing, or playing Descenders (the "Game"), you agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and Noodlecake Studios Inc ("Company," "we," "us," or "our"). If you do not agree to these Terms, you may not use the Game.
                  </p>
                </div>
              </div>

              <div className="racing-border-gradient">
                <div className="p-6 sm:p-8">
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">Game License</h2>
                  <p className="text-gray-700 leading-relaxed mb-4 font-rajdhani text-sm sm:text-base">
                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 font-rajdhani text-sm sm:text-base">
                    <li>Download and install the Game on your compatible devices</li>
                    <li>Use the Game for your personal, non-commercial entertainment purposes</li>
                    <li>Access and use the Game's features and content as intended</li>
                  </ul>
                </div>
              </div>

              <div className="racing-border-gradient">
                <div className="p-6 sm:p-8">
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">User Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed mb-4 font-rajdhani text-sm sm:text-base">
                    As a user of Descenders, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 font-rajdhani text-sm sm:text-base">
                    <li>Use the Game only for lawful purposes and in accordance with these Terms</li>
                    <li>Not attempt to reverse engineer, decompile, or disassemble the Game</li>
                    <li>Not use cheats, exploits, automation software, bots, hacks, or any unauthorized third-party software</li>
                    <li>Not interfere with or disrupt the Game's servers or networks</li>
                    <li>Not engage in any activity that could harm the Game or other players' experience</li>
                  </ul>
                </div>
              </div>

              <div className="racing-border-gradient">
                <div className="p-6 sm:p-8">
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4 font-rajdhani text-sm sm:text-base">
                    If you have any questions about these Terms of Service, please contact us:
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

export default Terms;
