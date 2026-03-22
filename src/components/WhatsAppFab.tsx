import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/+2250546841168"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] shadow-xl shadow-[hsl(142,70%,40%)/0.3] hover:brightness-110 active:scale-95 transition-all duration-200 animate-pulse-glow"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
