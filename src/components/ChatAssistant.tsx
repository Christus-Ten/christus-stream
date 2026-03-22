import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, MessageCircle } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const GREETING = "Salut ! 👋 Je suis l'assistant de ChristusTV. Pose-moi une question sur le site, les contenus ou comment télécharger !";

function getBotReply(input: string): string {
  const q = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (q.match(/salut|bonjour|hello|hey|bonsoir|coucou/))
    return "Salut ! 😄 Bienvenue sur ChristusTV ! Comment je peux t'aider ?";

  if (q.match(/qui.*cree|createur|fondateur|qui.*fait|qui.*derriere|proprietaire|admin/))
    return "ChristusTV a été créé par **Christus** ! C'est lui le boss 💪. Tu peux le contacter sur WhatsApp : wa.me/+2250546841168";

  if (q.match(/contact|whatsapp|joindre|ecrire|parler.*admin|message/))
    return "Tu peux contacter Christus directement sur WhatsApp 📱 :\n👉 [wa.me/+2250546841168](https://wa.me/+2250546841168)";

  if (q.match(/telecharger|download|telechargement/))
    return "Pour télécharger un contenu :\n1. Clique sur le manga ou film qui t'intéresse\n2. Clique sur le bouton **TÉLÉCHARGER**\n3. Ça t'envoie directement sur WhatsApp pour demander le fichier à Christus 📥";

  if (q.match(/regarder|voir|watch|stream|lecture|lire/))
    return "Pour regarder un contenu :\n1. Clique sur la carte du manga ou film\n2. La bande-annonce se lance automatiquement 🎬\n3. Pour l'épisode complet, contacte Christus sur WhatsApp !";

  if (q.match(/manga|anime|anim/))
    return "On a les meilleurs mangas ! Solo Leveling, Jujutsu Kaisen, Demon Slayer, One Piece, Naruto et bien plus 🔥. Va voir la section Mangas sur l'accueil !";

  if (q.match(/film|serie|movie/))
    return "Films & Séries dispo : Oppenheimer, Dune, The Batman, Squid Game, Breaking Bad, John Wick 4, Stranger Things et plus encore 🎬 !";

  if (q.match(/gratuit|prix|payer|combien|cout/))
    return "Tout est **100% gratuit** sur ChristusTV ! 🎉 Pas de frais, pas d'abonnement. Profite !";

  if (q.match(/nouveau|quoi de neuf|mise a jour|update/))
    return "De nouveaux contenus sont ajoutés régulièrement ! Suis-nous et contacte Christus sur WhatsApp pour être au courant des dernières sorties 🆕";

  if (q.match(/merci|thanks|cool|genial|super|top/))
    return "De rien ! 😊 N'hésite pas si tu as d'autres questions. Bonne visite sur ChristusTV ! 🔥";

  if (q.match(/comment.*marche|fonctionn|utiliser|aide/))
    return "ChristusTV c'est simple :\n• Explore les mangas et films sur l'accueil\n• Clique pour regarder la bande-annonce\n• Contacte Christus sur WhatsApp pour télécharger\nTout est gratuit ! 🎉";

  return "Je suis pas sûr de comprendre 🤔. Tu peux me poser des questions sur :\n• Les mangas et films disponibles\n• Comment télécharger\n• Comment contacter Christus\n• Le fonctionnement du site";
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: GREETING },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 400 + Math.random() * 400);
  };

  const renderText = (text: string) => {
    // simple markdown bold and links
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {i > 0 && <br />}
        {line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/).map((part, j) => {
          const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
          if (boldMatch) return <strong key={j} className="font-semibold">{boldMatch[1]}</strong>;
          const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
          if (linkMatch)
            return (
              <a key={j} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="underline text-primary">
                {linkMatch[1]}
              </a>
            );
          return <span key={j}>{part}</span>;
        })}
      </span>
    ));
  };

  return (
    <>
      {/* Toggle button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-24 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:brightness-110 active:scale-95 transition-all duration-200 animate-pulse-glow"
          aria-label="Ouvrir l'assistant"
        >
          <Bot size={24} />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[340px] sm:w-[380px] max-h-[520px] rounded-2xl bg-card border border-border shadow-2xl shadow-primary/10 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-secondary border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot size={16} className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground tracking-wide">Assistant ChristusTV</p>
                <p className="text-[10px] text-muted-foreground">En ligne • par Christus</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors active:scale-95"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px] max-h-[360px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm font-body leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-secondary-foreground rounded-bl-md"
                  }`}
                >
                  {renderText(msg.text)}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-border bg-card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pose ta question..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-secondary text-foreground text-sm font-body placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
