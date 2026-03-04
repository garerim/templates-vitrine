import { notFound } from "next/navigation";
import { getTemplateBySlug, templates } from "@/data/templates";
import { TemplateViewer } from "@/components/templates/TemplateViewer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return {};
  return {
    title: `${template.name} — Templates Vitrine`,
    description: template.description,
  };
}

export default async function TemplatePage({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  return <TemplateViewer template={template} />;
}
