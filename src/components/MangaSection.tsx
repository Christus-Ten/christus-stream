import ContentCard from "./ContentCard";
import SectionTitle from "./SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const mangas = [
  { title: "Solo Leveling", image: "https://cdn.myanimelist.net/images/anime/1001/138810l.jpg", category: "Action", episodes: "12 épisodes", year: "2024" },
  { title: "Jujutsu Kaisen", image: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg", category: "Shōnen", episodes: "47 épisodes", year: "2023" },
  { title: "Chainsaw Man", image: "https://cdn.myanimelist.net/images/anime/1806/126216l.jpg", category: "Action", episodes: "12 épisodes", year: "2022" },
  { title: "Demon Slayer", image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg", category: "Shōnen", episodes: "44 épisodes", year: "2023" },
  { title: "Attack on Titan", image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg", category: "Dark Fantasy", episodes: "87 épisodes", year: "2023" },
  { title: "One Piece", image: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg", category: "Aventure", episodes: "1100+ épisodes", year: "1999" },
  { title: "Bleach: TYBW", image: "https://cdn.myanimelist.net/images/anime/1908/135431l.jpg", category: "Shōnen", episodes: "26 épisodes", year: "2024" },
  { title: "Naruto Shippuden", image: "https://cdn.myanimelist.net/images/anime/1565/111305l.jpg", category: "Shōnen", episodes: "500 épisodes", year: "2017" },
];

export default function MangaSection() {
  const ref = useScrollReveal();

  return (
    <section id="mangas" className="py-24 bg-background">
      <div className="container">
        <SectionTitle title="Mangas Populaires" subtitle="Les meilleurs mangas et animes du moment à regarder et télécharger." />
        <div ref={ref} className="scroll-reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {mangas.map((m, i) => (
            <ContentCard key={m.title} {...m} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
