export type TemplateCategory = "restauration" | "beaute" | "commerce";

export interface Template {
  slug: string;
  name: string;
  description: string;
  category: TemplateCategory;
  categoryLabel: string;
  palette: string[];
  style: string;
  tags: string[];
  previewBg: string;
  previewImage: string;
}
