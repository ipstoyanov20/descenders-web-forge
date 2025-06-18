
import { Button } from '@/components/ui/button';

const Terms = () => {
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
              Terms of Service
            </h1>
            <p className="text-gray-400 font-rajdhani">
              Last updated: December 18, 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none font-rajdhani space-y-6">
            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By downloading, installing, or playing Descenders (the "Game"), you agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and Noodlecake Studios Inc ("Company," "we," "us," or "our"). If you do not agree to these Terms, you may not use the Game.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Game License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Download and install the Game on your compatible devices</li>
                <li>Use the Game for your personal, non-commercial entertainment purposes</li>
                <li>Access and use the Game's features and content as intended</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                This license does not grant you any ownership rights in the Game or its content. All rights not expressly granted are reserved by the Company.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a user of Descenders, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Use the Game only for lawful purposes and in accordance with these Terms</li>
                <li>Not attempt to reverse engineer, decompile, or disassemble the Game</li>
                <li>Not use cheats, exploits, automation software, bots, hacks, or any unauthorized third-party software</li>
                <li>Not interfere with or disrupt the Game's servers or networks</li>
                <li>Not engage in any activity that could harm the Game or other players' experience</li>
                <li>Maintain the confidentiality of your account information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Prohibited Conduct</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You must not engage in any of the following prohibited activities:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>Harassing, threatening, or intimidating other users</li>
                <li>Distributing malware, viruses, or other harmful code</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Selling, trading, or transferring your account or game progress</li>
                <li>Using offensive, inappropriate, or copyrighted content</li>
                <li>Impersonating other individuals or entities</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-300 leading-relaxed">
                The Game and all its content, including but not limited to graphics, audio, text, code, and gameplay mechanics, are owned by Noodlecake Studios Inc and protected by copyright, trademark, and other intellectual property laws. You acknowledge that you have no rights to such content except as expressly granted in these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Privacy and Data Collection</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Our collection and use of your information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Game, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Game Updates and Modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update, modify, or discontinue the Game or any of its features at any time without prior notice. Updates may be automatically downloaded and installed on your device. You acknowledge that we have no obligation to maintain or support any particular version of the Game.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Disclaimers and Limitations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Game is provided "as is" without warranties of any kind. To the fullest extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>We disclaim all warranties, express or implied</li>
                <li>We do not guarantee that the Game will be error-free or uninterrupted</li>
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability shall not exceed the amount you paid for the Game</li>
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your access to the Game at any time, with or without cause, and with or without notice. Upon termination, your license to use the Game will cease immediately, and you must uninstall the Game from all your devices.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Saskatchewan, Canada. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Saskatchewan.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white"><strong>Noodlecake Studios Inc</strong></p>
                <p className="text-gray-300">Email: support@noodlecake.com</p>
                <p className="text-gray-300">Address: 207-262 Avenue B S, Saskatoon, SK S7M 1M4, Canada</p>
                <p className="text-gray-300">Phone: +1 306-518-7625</p>
              </div>
            </section>

            <section>
              <h2 className="font-orbitron font-bold text-2xl text-gaming-purple mb-4">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of significant changes by posting the updated Terms on our website. Your continued use of the Game after such changes constitutes your acceptance of the modified Terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
