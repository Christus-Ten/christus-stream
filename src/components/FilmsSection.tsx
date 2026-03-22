import ContentCard from "./ContentCard";
import SectionTitle from "./SectionTitle";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { films } from "@/data/content";

export default function FilmsSection() {
  const ref = useScrollReveal();

  return (
    <section id="films" className="py-24 bg-secondary/30">
      <div className="container">
        <SectionTitle title="Films & Séries" subtitle="Retrouve les blockbusters et séries les plus populaires." />
        <div ref={ref} className="scroll-reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {films.map((f, i) => (
            <ContentCard key={f.id} id={f.id} title={f.title} image={f.image} category={f.category} episodes={f.episodes} year={f.year} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
