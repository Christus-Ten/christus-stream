import ContentCard from "./ContentCard";
import SectionTitle from "./SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const films = [
  { title: "Oppenheimer", image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", category: "Drame", year: "2023" },
  { title: "Dune: Part Two", image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", category: "Sci-Fi", year: "2024" },
  { title: "The Batman", image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", category: "Action", year: "2022" },
  { title: "Squid Game", image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", category: "Série", episodes: "Saison 1-2", year: "2024" },
  { title: "Breaking Bad", image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", category: "Série", episodes: "5 saisons", year: "2013" },
  { title: "John Wick 4", image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg", category: "Action", year: "2023" },
  { title: "Stranger Things", image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", category: "Série", episodes: "4 saisons", year: "2022" },
  { title: "Spider-Man: ATSV", image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", category: "Animation", year: "2023" },
];

export default function FilmsSection() {
  const ref = useScrollReveal();

  return (
    <section id="films" className="py-24 bg-secondary/30">
      <div className="container">
        <SectionTitle title="Films & Séries" subtitle="Retrouve les blockbusters et séries les plus populaires." />
        <div ref={ref} className="scroll-reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {films.map((f, i) => (
            <ContentCard key={f.title} {...f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
