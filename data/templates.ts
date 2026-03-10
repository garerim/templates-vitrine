import { Template } from "@/types/template";

export const templates: Template[] = [
  {
    slug: "bar",
    name: "Le Speakeasy",
    description:
      "Bar à cocktails avec une ambiance prohibition chic et mystérieuse. Parfait pour les établissements qui veulent une identité forte et mémorable.",
    category: "restauration",
    categoryLabel: "Bar & Cocktails",
    palette: ["#1a0a00", "#b87333", "#d4af37"],
    style: "Ambiance prohibition, moody",
    tags: ["bar", "cocktails", "sombre", "vintage"],
    previewBg: "from-amber-950 to-stone-900",
  },
  {
    slug: "restaurant",
    name: "La Table",
    description:
      "Restaurant gastronomique élégant aux tons crème et bordeaux. Une présence en ligne à la hauteur d'une cuisine raffinée.",
    category: "restauration",
    categoryLabel: "Restaurant",
    palette: ["#f5f0e8", "#722f37", "#c9a84c"],
    style: "Élégant, gastronomique",
    tags: ["restaurant", "gastronomique", "élégant", "luxe"],
    previewBg: "from-red-950 to-amber-100",
  },
  {
    slug: "salon",
    name: "Studio Élise",
    description:
      "Salon de coiffure moderne et épuré dans des tons rose et beige. Design contemporain pour une clientèle exigeante.",
    category: "beaute",
    categoryLabel: "Salon de coiffure",
    palette: ["#f9a8d4", "#f5f0eb", "#ffffff"],
    style: "Épuré, moderne",
    tags: ["salon", "coiffure", "rose", "moderne"],
    previewBg: "from-pink-100 to-rose-50",
  },
  {
    slug: "librairie",
    name: "Le Coin des Pages",
    description:
      "Librairie indépendante chaleureuse aux tons marron et vert sauge. Un univers vintage qui invite à la découverte.",
    category: "commerce",
    categoryLabel: "Librairie",
    palette: ["#8B4513", "#7d9a6e", "#f4e9d5"],
    style: "Chaleureux, vintage",
    tags: ["librairie", "livres", "vintage", "chaleureux"],
    previewBg: "from-amber-800 to-green-800",
  },
  {
    slug: "cafe",
    name: "Café Numa",
    description:
      "Café artisanal cosy aux tons terracotta et crème. L'endroit parfait pour les amateurs de café de spécialité.",
    category: "restauration",
    categoryLabel: "Café",
    palette: ["#e2694d", "#f5f0e8", "#8B6914"],
    style: "Cosy, artisanal",
    tags: ["café", "artisanal", "terracotta", "cosy"],
    previewBg: "from-orange-700 to-amber-100",
  },
  {
    slug: "boutique",
    name: "Maison Vague",
    description:
      "Boutique de mode minimaliste en noir, blanc et or. L'élégance au service de collections exclusives.",
    category: "commerce",
    categoryLabel: "Boutique Mode",
    palette: ["#000000", "#ffffff", "#d4af37"],
    style: "Minimaliste, fashion",
    tags: ["boutique", "mode", "minimaliste", "luxe"],
    previewBg: "from-neutral-900 to-neutral-100",
  },
  {
    slug: "brasserie",
    name: "Le Zinc",
    description:
      "Brasserie parisienne classique et conviviale aux tons vert forêt, crème et laiton. L'authenticité d'une institution de quartier avec une touche de modernité.",
    category: "restauration",
    categoryLabel: "Brasserie",
    palette: ["#2c3e2d", "#f8f3eb", "#c9a51e"],
    style: "Classique, convivial, brasserie",
    tags: ["brasserie", "restaurant", "convivial", "classique", "moderne"],
    previewBg: "from-green-900 to-amber-100",
  },
];

export const categories = [
  { value: "all", label: "Tous" },
  { value: "restauration", label: "Restauration" },
  { value: "beaute", label: "Beauté" },
  { value: "commerce", label: "Commerce" },
] as const;

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
