export function BoutiqueTemplate() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff", color: "#0a0a0a", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-12 py-5"
        style={{ borderBottom: "1px solid #e8e8e8" }}
      >
        <div className="text-sm tracking-[0.3em] uppercase" style={{ color: "#888" }}>Paris · Milan · Tokyo</div>
        <div className="text-2xl font-bold tracking-[0.2em] uppercase">Maison Vague</div>
        <div className="hidden md:flex gap-8 text-xs tracking-[0.25em] uppercase" style={{ color: "#666" }}>
          <a href="#" className="hover:text-black transition-colors">Collections</a>
          <a href="#" className="hover:text-black transition-colors">Lookbook</a>
          <a href="#" className="hover:text-black transition-colors">Univers</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "85vh" }}>
        <div className="flex flex-col justify-center px-12 md:px-16 py-20">
          <p className="mb-6 text-xs tracking-[0.5em] uppercase" style={{ color: "#d4af37" }}>
            Nouvelle Collection · SS 2025
          </p>
          <h1
            className="mb-8 font-bold leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#0a0a0a", lineHeight: 1 }}
          >
            FORME<br />& VIDE
          </h1>
          <p className="mb-10 max-w-sm text-base leading-relaxed" style={{ color: "#666" }}>
            La nouvelle collection Maison Vague explore la tension entre présence et absence,
            matière et espace. Des pièces intemporelles pour une femme contemporaine.
          </p>
          <div className="flex gap-4">
            <button
              className="px-8 py-3 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
              style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
            >
              Découvrir la collection
            </button>
            <button
              className="px-8 py-3 text-xs tracking-[0.25em] uppercase border transition-colors"
              style={{ borderColor: "#0a0a0a", color: "#0a0a0a" }}
            >
              Lookbook
            </button>
          </div>
        </div>
        <div
          className="overflow-hidden"
          style={{ minHeight: "400px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80&auto=format&fit=crop"
            alt="Maison Vague — Collection SS 2025"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "400px" }}
          />
        </div>
      </section>

      {/* Collection grid */}
      <section className="px-12 py-20" style={{ backgroundColor: "#fafafa" }}>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs tracking-[0.4em] uppercase" style={{ color: "#d4af37" }}>La sélection</p>
            <h2 className="text-3xl font-bold tracking-tight">Pièces phares</h2>
          </div>
          <a href="#" className="text-xs tracking-[0.25em] uppercase border-b" style={{ color: "#0a0a0a", borderColor: "#0a0a0a" }}>
            Voir tout
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Manteau Oversize", material: "Laine bouillie · 100% laine vierge", price: "890€", emoji: "🧥" },
            { name: "Robe Structurée", material: "Soie sauvage · Édition limitée", price: "650€", emoji: "👗" },
            { name: "Pantalon Large", material: "Crêpe de laine · Coupe architecturale", price: "380€", emoji: "👖" },
            { name: "Sac Minimaliste", material: "Cuir pleine fleur · Maroquinerie française", price: "520€", emoji: "👜" },
          ].map((item) => (
            <div key={item.name} className="group cursor-pointer">
              <div
                className="mb-4 flex items-center justify-center text-5xl transition-all duration-500 group-hover:bg-neutral-100"
                style={{ height: "280px", backgroundColor: "#f0f0f0" }}
              >
                {item.emoji}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-xs mt-1" style={{ color: "#888" }}>{item.material}</p>
                </div>
                <span className="text-sm font-bold" style={{ color: "#d4af37" }}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="px-12 py-20">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="mb-4 text-xs tracking-[0.4em] uppercase" style={{ color: "#d4af37" }}>Notre maison</p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight leading-tight">
              L'art du<br />vêtement essentiel
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#666" }}>
              Fondée à Paris en 2018, Maison Vague est née d'une conviction : le luxe véritable
              réside dans la qualité des matières, la précision des coupes et la pérennité du style.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "#666" }}>
              Chaque pièce est conçue pour durer, confectionnée en petites séries par des ateliers
              partenaires en France et en Italie.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[["100%", "Matières premium"], ["France", "& Italie"], ["2018", "Fondée en"]].map(([val, label]) => (
                <div key={label} className="border-t pt-4" style={{ borderColor: "#e8e8e8" }}>
                  <div className="text-xl font-bold">{val}</div>
                  <div className="text-xs mt-1" style={{ color: "#888" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format&fit=crop"
              alt="Maison Vague — Notre boutique"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="px-12 py-20 text-center"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <p className="mb-3 text-xs tracking-[0.4em] uppercase" style={{ color: "#d4af37" }}>Club Maison Vague</p>
        <h2 className="mb-4 text-4xl font-bold" style={{ color: "#fff" }}>
          Accès prioritaire<br />aux nouvelles collections
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm" style={{ color: "#888" }}>
          Rejoignez la communauté Maison Vague pour un accès exclusif aux pré-ventes,
          événements privés et éditions limitées.
        </p>
        <div className="mx-auto flex max-w-md gap-0">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 px-6 py-4 text-sm outline-none"
            style={{ backgroundColor: "#1a1a1a", color: "#fff", border: "1px solid #333" }}
          />
          <button
            className="px-6 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#d4af37", color: "#0a0a0a" }}
          >
            Rejoindre
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-12 py-8 text-center text-xs tracking-wider"
        style={{ backgroundColor: "#050505", color: "#555", borderTop: "1px solid #1a1a1a" }}
      >
        <p className="uppercase">Maison Vague · 8 Rue du Faubourg Saint-Honoré, Paris 8e · contact@maisonvague.com</p>
        <p className="mt-2" style={{ color: "#d4af37" }}>© 2025 Maison Vague — Tous droits réservés</p>
      </footer>
    </div>
  );
}
