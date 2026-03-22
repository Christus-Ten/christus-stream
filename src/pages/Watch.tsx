import { useParams, Link } from "react-router-dom";
import { getContentById } from "@/data/content";
import { ArrowLeft, Download, Play, MessageCircle } from "lucide-react";

export default function Watch() {
  const { id } = useParams<{ id: string }>();
  const content = id ? getContentById(id) : undefined;

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Contenu introuvable</h1>
          <p className="mt-2 text-muted-foreground">Ce contenu n'existe pas ou a été retiré.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider hover:brightness-110 active:scale-[0.97] transition-all"
          >
            <ArrowLeft size={16} />
            RETOUR À L'ACCUEIL
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Salut Christus ! Je voudrais télécharger "${content.title}". Merci !`
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center h-16 gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-display text-sm tracking-wider">RETOUR</span>
          </Link>
          <div className="ml-auto font-display text-xl font-bold tracking-wider text-primary">
            CHRISTUS<span className="text-foreground">TV</span>
          </div>
        </div>
      </nav>

      {/* Video Player */}
      <div className="w-full bg-black">
        <div className="container max-w-5xl">
          <div className="relative w-full aspect-video">
            {content.videoUrl ? (
              <iframe
                src={content.videoUrl}
                title={content.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-card">
                <div className="text-center">
                  <Play size={64} className="mx-auto text-primary" />
                  <p className="mt-4 text-muted-foreground">Vidéo bientôt disponible</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Info */}
      <div className="container max-w-5xl py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="shrink-0 w-48 mx-auto md:mx-0">
            <img
              src={content.image}
              alt={content.title}
              className="w-full rounded-xl shadow-2xl shadow-primary/10"
            />
          </div>

          {/* Details */}
          <div className="flex-1">
            <span className="text-xs font-display tracking-widest text-primary uppercase">
              {content.category}
            </span>
            <h1 className="mt-1 font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              {content.title}
            </h1>
            <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground font-body">
              {content.year && <span className="px-3 py-1 rounded-full bg-secondary">{content.year}</span>}
              {content.episodes && (
                <span className="px-3 py-1 rounded-full bg-secondary">{content.episodes}</span>
              )}
              <span className="px-3 py-1 rounded-full bg-secondary">{content.type === "manga" ? "Anime" : "Film/Série"}</span>
            </div>

            <p className="mt-6 text-muted-foreground font-body leading-relaxed max-w-2xl">
              {content.description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/+2250546841168?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider hover:brightness-110 active:scale-[0.97] transition-all shadow-lg shadow-primary/25"
              >
                <Download size={18} />
                TÉLÉCHARGER
              </a>
              <a
                href={`https://wa.me/+2250546841168?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] font-display text-sm font-semibold tracking-wider hover:brightness-110 active:scale-[0.97] transition-all shadow-lg shadow-[hsl(142,70%,40%)/0.25]"
              >
                <MessageCircle size={18} />
                DEMANDER SUR WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
