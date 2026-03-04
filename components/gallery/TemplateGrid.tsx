"use client";

import { useState } from "react";
import { templates } from "@/data/templates";
import { TemplateCard } from "./TemplateCard";
import { CategoryFilter } from "./CategoryFilter";
import { Template } from "@/types/template";

export function TemplateGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered: Template[] =
    activeCategory === "all"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <div>
      <div className="mb-8">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-neutral-400">
          Aucun template dans cette catégorie.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      )}
    </div>
  );
}
