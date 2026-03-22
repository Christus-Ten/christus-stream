import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MangaSection from "@/components/MangaSection";
import FilmsSection from "@/components/FilmsSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MangaSection />
      <FilmsSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
