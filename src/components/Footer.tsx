import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container text-center">
        <h2 className="font-display text-2xl font-bold text-primary text-glow">
          CHRISTUS<span className="text-foreground">TV</span>
        </h2>
        <p className="mt-3 text-muted-foreground text-sm max-w-md mx-auto">
          Ton univers manga, films et séries. Regarde et télécharge gratuitement.
        </p>

        <a
          href="https://wa.me/+2250546841168"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] font-display text-sm font-semibold tracking-wider hover:brightness-110 active:scale-[0.97] transition-all shadow-lg shadow-[hsl(142,70%,40%)/0.25]"
        >
          <MessageCircle size={18} />
          CONTACTER SUR WHATSAPP
        </a>

        <div className="mt-12 pt-8 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} ChristusTV. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
