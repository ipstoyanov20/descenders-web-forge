
import { Button } from '@/components/ui/button';

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-gray-400 font-rajdhani">
              Last updated: December 18, 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none font-rajdhani space-y-6">
            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy describes how Noodlecake Studios Inc ("we," "our," or "us") collects, uses, and protects your information when you play Descenders or visit our website. We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect various types of information to provide and improve our game experience:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Game progress and performance data to enhance gameplay experience</li>
                <li>Device information including operating system, device model, and unique identifiers</li>
                <li>Usage statistics and analytics to improve game features and performance</li>
                <li>Contact information when you reach out to our support team</li>
                <li>Technical data for debugging and crash reporting purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your information helps us provide the best possible gaming experience:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Delivering and maintaining game functionality and features</li>
                <li>Analyzing gameplay patterns to improve game balance and design</li>
                <li>Providing customer support and responding to your inquiries</li>
                <li>Preventing fraud, abuse, and technical issues</li>
                <li>Communicating important game updates and announcements</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Our game may integrate with third-party services for analytics, advertising, or social features. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of these third-party services.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not knowingly collect personal information from children under 13 years of age. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct or update your information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white"><strong>Noodlecake Studios Inc</strong></p>
                <p className="text-gray-300">Email: support@noodlecake.com</p>
                <p className="text-gray-300">Address: 207-262 Avenue B S, Saskatoon, SK S7M 1M4, Canada</p>
                <p className="text-gray-300">Phone: +1 306-518-7625</p>
              </div>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website and updating the "Last updated" date above.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
