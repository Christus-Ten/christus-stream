import { Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ContentCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  episodes?: string;
  year?: string;
  delay?: number;
}

export default function ContentCard({ id, title, image, category, episodes, year, delay = 0 }: ContentCardProps) {
  return (
    <Link
      to={`/watch/${id}`}
      className="group relative rounded-xl overflow-hidden bg-card card-hover gradient-border animate-slide-up block"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-20">
          <div className="flex gap-3">
            <span className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
              <Eye size={18} />
            </span>
            <span className="p-3 rounded-full bg-secondary text-secondary-foreground shadow-lg">
              <Download size={18} />
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <span className="text-xs font-display tracking-widest text-primary uppercase">{category}</span>
        <h3 className="mt-1 font-display text-sm font-semibold tracking-wide text-foreground truncate">{title}</h3>
        <p className="mt-1 text-xs text-muted-foreground font-body">
          {episodes && <span>{episodes}</span>}
          {year && <span>{episodes ? " • " : ""}{year}</span>}
        </p>
      </div>
    </Link>
  );
}
