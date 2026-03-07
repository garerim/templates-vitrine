import { TemplateGrid } from "@/components/gallery/TemplateGrid";
import { templates } from "@/data/templates";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white px-6 py-5 md:px-10">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-white font-bold text-sm">
              GS
            </div>
            <span className="text-base font-semibold text-neutral-900">Gama Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
            <a href="#templates" className="hover:text-neutral-900 transition-colors">Templates</a>
            <a href="#avantages" className="hover:text-neutral-900 transition-colors">Avantages</a>
            <a href="#tarifs" className="hover:text-neutral-900 transition-colors">Tarifs</a>
          </nav>
          <a
            href="mailto:contact@templates-vitrine.fr"
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white px-6 py-20 md:px-10 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-3 py-1 mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-green-700">
              {templates.length} sites disponibles immédiatement
            </span>
          </div>
          <h2 className="mb-6 text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
            Votre site web,<br />
            <span className="text-neutral-400">prêt en 24h.</span>
          </h2>
          <p className="max-w-2xl text-lg text-neutral-500 leading-relaxed mb-8">
            Des sites vitrines professionnels conçus pour bars, restaurants, salons, librairies et boutiques.
            Design soigné, rapide à mettre en ligne, sans compromis sur la qualité.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#templates"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-700 transition-colors"
            >
              Voir les templates
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@templates-vitrine.fr"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              Demander un devis
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Livraison en 24h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Contenu personnalisé inclus</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Support inclus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section id="avantages" className="bg-neutral-50 px-6 py-16 md:px-10 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium tracking-widest uppercase text-neutral-400">
            Pourquoi nous choisir
          </p>
          <h3 className="mb-10 text-3xl font-bold text-neutral-900">
            Tout ce dont votre commerce a besoin
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <div className="text-2xl mb-3">⚡</div>
              <h4 className="font-semibold text-neutral-900 mb-2">Mise en ligne rapide</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Votre site est prêt en 24 heures. Transmettez-nous vos informations, on s'occupe du reste.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <div className="text-2xl mb-3">🎨</div>
              <h4 className="font-semibold text-neutral-900 mb-2">Design professionnel</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Chaque template est conçu pour votre secteur d'activité. Élégant, moderne, efficace.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-neutral-200">
              <div className="text-2xl mb-3">📱</div>
              <h4 className="font-semibold text-neutral-900 mb-2">100% responsive</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Vos clients consultent votre site sur mobile. Tous nos sites s'adaptent parfaitement à chaque écran.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="templates" className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium tracking-widest uppercase text-neutral-400">
            Notre collection
          </p>
          <h3 className="mb-8 text-3xl font-bold text-neutral-900">Choisissez votre template</h3>
          <TemplateGrid />
        </div>
      </section>

      {/* CTA */}
      <section id="tarifs" className="bg-neutral-900 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="mb-4 text-3xl md:text-4xl font-bold text-white">Prêt à vous lancer ?</h3>
          <p className="mb-8 text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Choisissez votre template, transmettez-nous votre contenu, et votre site est en ligne en 24h.
            Simple, rapide, professionnel.
          </p>
          <a
            href="mailto:contact@templates-vitrine.fr"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            Démarrer mon projet
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white px-6 py-8 text-center text-sm text-neutral-400">
        <p>© 2025 Gama Studio · Tous droits réservés</p>
      </footer>
    </div>
  );
}
