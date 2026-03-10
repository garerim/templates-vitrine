import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Template } from "@/types/template";

interface TemplateCardProps {
  template: Template;
}

const categoryColors: Record<string, string> = {
  restauration: "bg-orange-100 text-orange-800 border-orange-200",
  beaute: "bg-pink-100 text-pink-800 border-pink-200",
  commerce: "bg-blue-100 text-blue-800 border-blue-200",
};

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href={`/templates/${template.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Preview area */}
        <div className="relative h-52 overflow-hidden">
          {/* Photo de fond */}
          <img
            src={template.previewImage}
            alt={template.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />

          {/* Color palette dots */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {template.palette.map((color, i) => (
              <div
                key={i}
                className="h-5 w-5 rounded-full border-2 border-white/50 shadow-md"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Arrow on hover */}
          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowRight className="h-4 w-4 text-white" />
          </div>

          {/* Style tag */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {template.style}
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-5">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
              {template.name}
            </h3>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[template.category]}`}
            >
              {template.categoryLabel}
            </span>
          </div>
          <p className="text-sm text-neutral-500 line-clamp-2">
            {template.description}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {template.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
