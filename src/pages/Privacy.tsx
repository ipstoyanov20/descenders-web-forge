import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen racing-gradient">
      <div className="racing-stripe"></div>
      <div className="bg-paper-white min-h-screen">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-12">
              <Link to="/">
                <Button 
                  variant="outline"
                  className="border-racing-red text-racing-red hover:bg-racing-red hover:text-white transition-colors font-rajdhani mb-6 text-sm sm:text-base"
                >
                  ← Back to Home
                </Button>
              </Link>
              <div className="racing-border-gradient mb-6">
                <div className="p-6 sm:p-8">
                  <h1 className="font-orbitron font-bold text-3xl sm:text-4xl lg:text-5xl racing-text-gradient mb-4">
                    Privacy Policy
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
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed font-rajdhani text-sm sm:text-base">
                    This Privacy Policy describes how Noodlecake Studios Inc ("we," "our," or "us") collects, uses, and protects your information when you play Descenders or visit our website. We are committed to protecting your privacy and ensuring the security of your personal information.
                  </p>
                </div>
              </div>

              <div className="racing-border-gradient">
                <div className="p-6 sm:p-8">
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">Information We Collect</h2>
                  <p className="text-gray-700 leading-relaxed mb-4 font-rajdhani text-sm sm:text-base">
                    We may collect various types of information to provide and improve our game experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 font-rajdhani text-sm sm:text-base">
                    <li>Game progress and performance data to enhance gameplay experience</li>
                    <li>Device information including operating system, device model, and unique identifiers</li>
                    <li>Usage statistics and analytics to improve game features and performance</li>
                    <li>Contact information when you reach out to our support team</li>
                    <li>Technical data for debugging and crash reporting purposes</li>
                  </ul>
                </div>
              </div>

              <div className="racing-border-gradient">
                <div className="p-6 sm:p-8">
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4 font-rajdhani text-sm sm:text-base">
                    Your information helps us provide the best possible gaming experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 font-rajdhani text-sm sm:text-base">
                    <li>Delivering and maintaining game functionality and features</li>
                    <li>Analyzing gameplay patterns to improve game balance and design</li>
                    <li>Providing customer support and responding to your inquiries</li>
                    <li>Preventing fraud, abuse, and technical issues</li>
                    <li>Communicating important game updates and announcements</li>
                  </ul>
                </div>
              </div>

              <div className="racing-border-gradient">
                <div className="p-6 sm:p-8">
                  <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-racing-red mb-4">Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4 font-rajdhani text-sm sm:text-base">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default Privacy;
