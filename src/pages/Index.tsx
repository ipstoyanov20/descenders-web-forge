
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import GallerySection from '@/components/GallerySection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
