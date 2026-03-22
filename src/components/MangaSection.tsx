import ContentCard from "./ContentCard";
import SectionTitle from "./SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { mangas } from "@/data/content";

export default function MangaSection() {
  const ref = useScrollReveal();

  return (
    <section id="mangas" className="py-24 bg-background">
      <div className="container">
        <SectionTitle title="Mangas Populaires" subtitle="Les meilleurs mangas et animes du moment à regarder et télécharger." />
        <div ref={ref} className="scroll-reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {mangas.map((m, i) => (
            <ContentCard key={m.id} id={m.id} title={m.title} image={m.image} category={m.category} episodes={m.episodes} year={m.year} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
