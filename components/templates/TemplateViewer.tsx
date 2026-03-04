"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Template } from "@/types/template";
import { BarTemplate } from "./BarTemplate";
import { RestaurantTemplate } from "./RestaurantTemplate";
import { SalonTemplate } from "./SalonTemplate";
import { BookstoreTemplate } from "./BookstoreTemplate";
import { CafeTemplate } from "./CafeTemplate";
import { BoutiqueTemplate } from "./BoutiqueTemplate";

const templateComponents: Record<string, React.ComponentType> = {
  bar: BarTemplate,
  restaurant: RestaurantTemplate,
  salon: SalonTemplate,
  librairie: BookstoreTemplate,
  cafe: CafeTemplate,
  boutique: BoutiqueTemplate,
};

const categoryColors: Record<string, string> = {
  restauration: "bg-orange-100 text-orange-800",
  beaute: "bg-pink-100 text-pink-800",
  commerce: "bg-blue-100 text-blue-800",
};

interface TemplateViewerProps {
  template: Template;
}

export function TemplateViewer({ template }: TemplateViewerProps) {
  const TemplateComponent = templateComponents[template.slug];

  return (
    <div className="relative min-h-screen">
      {/* Floating top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center gap-4 px-5 py-3 bg-white/90 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Link>

        <div className="h-4 w-px bg-neutral-300" />

        <div className="flex-1 flex items-center gap-3">
          <span className="text-sm font-semibold text-neutral-900">{template.name}</span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[template.category]}`}
          >
            {template.categoryLabel}
          </span>
        </div>

        {/* Palette preview */}
        <div className="hidden md:flex items-center gap-1.5">
          {template.palette.map((color, i) => (
            <div
              key={i}
              className="h-4 w-4 rounded-full border border-neutral-200"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        <a
          href="mailto:contact@templates-vitrine.fr"
          className="flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Commander ce site
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Template content */}
      <div className="pt-14">
        {TemplateComponent ? (
          <TemplateComponent />
        ) : (
          <div className="flex h-screen items-center justify-center text-neutral-400">
            Template non trouvé
          </div>
        )}
      </div>
    </div>
  );
}
