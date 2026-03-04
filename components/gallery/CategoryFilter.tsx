"use client";

import { categories } from "@/data/templates";

interface CategoryFilterProps {
  active: string;
  onChange: (value: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
            active === cat.value
              ? "bg-neutral-900 text-white shadow-md"
              : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
