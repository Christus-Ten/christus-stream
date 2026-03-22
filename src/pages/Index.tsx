import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MangaSection from "@/components/MangaSection";
import FilmsSection from "@/components/FilmsSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ChatAssistant from "@/components/ChatAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MangaSection />
      <FilmsSection />
      <Footer />
      <WhatsAppFab />
      <ChatAssistant />
    </div>
  );
};

export default Index;
