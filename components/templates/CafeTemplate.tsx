export function CafeTemplate() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf5ee", color: "#2c1a0a", fontFamily: "'Georgia', serif" }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-10 py-5"
        style={{ borderBottom: "2px solid #e2694d" }}
      >
        <div className="text-2xl font-bold" style={{ color: "#e2694d" }}>
          ☕ Café Numa
        </div>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "#8a6040" }}>
          <a href="#" className="hover:text-stone-900 transition-colors">La Carte</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Nos cafés</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Workshops</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Nous trouver</a>
        </div>
        <button
          className="px-5 py-2 text-sm rounded-full transition-colors"
          style={{ backgroundColor: "#e2694d", color: "#fff" }}
        >
          Commander
        </button>
      </nav>

      {/* Hero */}
      <section
        className="px-6 py-24 text-center"
        style={{ background: "linear-gradient(180deg, #fce4d6 0%, #faf5ee 100%)" }}
      >
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xs tracking-[0.5em] uppercase" style={{ color: "#8B6914" }}>
            Spécialité · Brûlerie artisanale
          </p>
          <h1 className="mb-4 text-7xl md:text-8xl font-bold" style={{ color: "#2c1a0a" }}>
            Café<br /><span style={{ color: "#e2694d" }}>Numa</span>
          </h1>
          <p className="mx-auto mb-10 max-w-md text-base leading-relaxed" style={{ color: "#7a5030" }}>
            Nous torréfions nos propres grains, sélectionnés directement auprès de petits producteurs
            en Éthiopie, Colombie et Guatemala. Chaque tasse est une aventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 text-sm rounded-full transition-colors font-medium"
              style={{ backgroundColor: "#e2694d", color: "#fff" }}
            >
              Notre carte
            </button>
            <button
              className="px-8 py-3 text-sm rounded-full border transition-colors"
              style={{ borderColor: "#8B6914", color: "#8B6914" }}
            >
              Acheter nos cafés
            </button>
          </div>
        </div>
      </section>

      {/* Menu highlight */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold" style={{ color: "#2c1a0a" }}>À la carte</h2>
            <p className="text-sm mt-2" style={{ color: "#8a6040" }}>Tout est fait maison, avec amour</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { category: "☕ Cafés", items: [
                { name: "Espresso", desc: "Simple ou double extraction", price: "2,50€" },
                { name: "Flat White", desc: "Double espresso, lait texturé soyeux", price: "4,20€" },
                { name: "Cold Brew", desc: "Extraction froide 18h, servi sur glace", price: "4,50€" },
                { name: "Cappuccino", desc: "Espresso, mousse de lait, cacao", price: "3,80€" },
              ]},
              { category: "🥐 Pâtisseries", items: [
                { name: "Croissant pur beurre", desc: "Livraison quotidienne, boulangerie Dupont", price: "2,20€" },
                { name: "Pain aux raisins", desc: "Recette traditionnelle, fait maison", price: "2,50€" },
                { name: "Banana bread", desc: "Vegan, sans gluten possible", price: "3,50€" },
                { name: "Granola bowl", desc: "Yaourt grec, fruits frais, miel local", price: "6,50€" },
              ]},
            ].map((cat) => (
              <div key={cat.category} className="p-6 rounded-xl" style={{ backgroundColor: "#fce4d6" }}>
                <h3 className="mb-4 text-lg font-bold" style={{ color: "#e2694d" }}>{cat.category}</h3>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start">
                      <div>
                        <span className="font-medium" style={{ color: "#2c1a0a" }}>{item.name}</span>
                        <p className="text-xs" style={{ color: "#8a6040" }}>{item.desc}</p>
                      </div>
                      <span className="font-bold ml-4 shrink-0" style={{ color: "#8B6914" }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our coffee origins */}
      <section className="px-6 py-16" style={{ backgroundColor: "#f0e4d0" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs tracking-[0.4em] uppercase" style={{ color: "#8B6914" }}>Notre philosophie</p>
            <h2 className="text-3xl font-bold" style={{ color: "#2c1a0a" }}>Du grain à la tasse</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { emoji: "🌱", title: "Sourcé directement", desc: "Nous visitons nos producteurs chaque année pour sélectionner les meilleures récoltes." },
              { emoji: "🔥", title: "Torréfié sur place", desc: "Notre torréfacteur artisanal travaille en petits lots pour une fraîcheur optimale." },
              { emoji: "☕", title: "Préparé avec soin", desc: "Chaque café est préparé avec attention par nos baristas certifiés SCA." },
            ].map((item) => (
              <div key={item.title}>
                <div className="mb-4 text-4xl">{item.emoji}</div>
                <h3 className="mb-2 text-lg font-bold" style={{ color: "#e2694d" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7a5030" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-3 text-xs tracking-[0.4em] uppercase" style={{ color: "#8B6914" }}>Ateliers & Formations</p>
            <h2 className="mb-4 text-3xl font-bold" style={{ color: "#2c1a0a" }}>Devenez expert café</h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#7a5030" }}>
              Organisez une immersion dans le monde du café de spécialité. Nos ateliers hebdomadaires
              vous apprennent à distinguer les origines, comprendre la torréfaction et maîtriser
              les différentes méthodes d'extraction.
            </p>
            <button
              className="px-6 py-3 text-sm rounded-full font-medium transition-colors"
              style={{ backgroundColor: "#8B6914", color: "#fff" }}
            >
              S'inscrire à un atelier
            </button>
          </div>
          <div
            className="h-64 flex items-center justify-center text-6xl rounded-xl"
            style={{ backgroundColor: "#fce4d6" }}
          >
            🎓
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-8 text-center text-sm" style={{ backgroundColor: "#2c1a0a", color: "#8a6040" }}>
        <p>Café Numa · 22 Rue des Abbesses, Paris 18e · Tous les jours 8h–18h</p>
        <p className="mt-1">contact@cafenuma.fr · Instagram @cafenuma</p>
      </footer>
    </div>
  );
}
