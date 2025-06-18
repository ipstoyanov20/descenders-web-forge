
import { Button } from '@/components/ui/button';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white font-rajdhani mb-6"
            >
              ← Back to Home
            </Button>
            <h1 className="font-orbitron font-bold text-4xl gaming-text-gradient mb-4">
              Cookies Policy
            </h1>
            <p className="text-gray-400 font-rajdhani">
              Last updated: December 18, 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none font-rajdhani space-y-6">
            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website or play our games. They help us provide you with a better experience by remembering your preferences, analyzing how you use our services, and improving our game performance. This Cookies Policy explains how Noodlecake Studios Inc uses cookies in connection with Descenders and our website.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-orbitron font-semibold text-lg text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies are necessary for the basic functioning of our game and website. They enable core features like security, network management, and accessibility. You cannot opt out of these cookies as they are essential for the service to work properly.
                  </p>
                </div>

                <div>
                  <h3 className="font-orbitron font-semibold text-lg text-white mb-2">Performance and Analytics Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies help us understand how players interact with our game and website by collecting information about gameplay patterns, crash reports, and user behavior. This data helps us improve game performance and fix bugs.
                  </p>
                </div>

                <div>
                  <h3 className="font-orbitron font-semibold text-lg text-white mb-2">Functional Cookies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    These cookies remember your preferences and settings, such as language preferences, game settings, and customization options. They enhance your experience by personalizing the game to your preferences.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies for various purposes to enhance your gaming experience:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Storing your game progress and settings locally on your device</li>
                <li>Remembering your preferences and customization choices</li>
                <li>Analyzing game performance and identifying areas for improvement</li>
                <li>Providing crash reporting and error tracking to fix bugs quickly</li>
                <li>Understanding player behavior to enhance gameplay features</li>
                <li>Ensuring the security and integrity of our game and services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                Our game may include third-party services such as analytics providers, advertising networks, or social media integrations. These third parties may set their own cookies on your device. We do not control these third-party cookies, and their use is governed by the respective third parties' privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Use our cookie consent banner to accept or decline non-essential cookies</li>
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions that block tracking cookies</li>
                <li>Opt out of analytics tracking through the game settings</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please note that disabling certain cookies may affect the functionality of our game and your overall gaming experience.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Mobile Gaming and Local Storage</h2>
              <p className="text-gray-300 leading-relaxed">
                In addition to cookies, our mobile game may use local storage technologies to save your game progress, settings, and preferences directly on your device. This ensures that your progress is preserved even when you're offline and provides a smoother gaming experience.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Updates to This Cookie Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by updating the "Last updated" date at the top of this policy and, where appropriate, through in-game notifications.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white"><strong>Noodlecake Studios Inc</strong></p>
                <p className="text-gray-300">Email: support@noodlecake.com</p>
                <p className="text-gray-300">Address: 207-262 Avenue B S, Saskatoon, SK S7M 1M4, Canada</p>
                <p className="text-gray-300">Phone: +1 306-518-7625</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
