import heroBanner from "@/assets/hero-banner.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-glow text-primary animate-slide-up"
        >
          CHRISTUS<span className="text-foreground">TV</span>
        </h1>
        <p
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto font-body animate-slide-up"
          style={{ animationDelay: "150ms" }}
        >
          Mangas, Films & Séries — Regarde et télécharge gratuitement tes contenus préférés.
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#mangas"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider hover:brightness-110 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/25"
          >
            EXPLORER LES MANGAS
          </a>
          <a
            href="#films"
            className="px-8 py-3 rounded-lg border border-border bg-secondary text-secondary-foreground font-display text-sm font-semibold tracking-wider hover:bg-muted active:scale-[0.97] transition-all duration-200"
          >
            FILMS & SÉRIES
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-glow">
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
