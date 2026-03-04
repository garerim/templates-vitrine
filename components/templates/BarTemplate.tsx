export function BarTemplate() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d0600", color: "#f5e6c8", fontFamily: "Georgia, serif" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-6 border-b" style={{ borderColor: "#2a1a00" }}>
        <div className="text-2xl font-bold tracking-widest uppercase" style={{ color: "#d4af37" }}>
          Le Speakeasy
        </div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase" style={{ color: "#b87333" }}>
          <a href="#" className="hover:text-amber-200 transition-colors">La Carte</a>
          <a href="#" className="hover:text-amber-200 transition-colors">Réservations</a>
          <a href="#" className="hover:text-amber-200 transition-colors">Notre Histoire</a>
          <a href="#" className="hover:text-amber-200 transition-colors">Contact</a>
        </div>
        <button
          className="px-5 py-2 text-sm tracking-widest uppercase border transition-colors"
          style={{ borderColor: "#d4af37", color: "#d4af37" }}
        >
          Réserver
        </button>
      </nav>

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "85vh", background: "radial-gradient(ellipse at center, #2a1200 0%, #0d0600 70%)" }}
      >
        {/* Decorative lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px" style={{ backgroundColor: "#d4af37" }} />
          <div className="absolute top-3/4 left-0 w-full h-px" style={{ backgroundColor: "#d4af37" }} />
          <div className="absolute top-0 left-1/4 h-full w-px" style={{ backgroundColor: "#d4af37" }} />
          <div className="absolute top-0 left-3/4 h-full w-px" style={{ backgroundColor: "#d4af37" }} />
        </div>

        <div className="relative z-10">
          <p className="mb-4 text-xs tracking-[0.4em] uppercase" style={{ color: "#b87333" }}>
            Est. 1923 · Paris, France
          </p>
          <h1 className="mb-6 text-6xl md:text-8xl font-bold tracking-tight" style={{ color: "#f5e6c8" }}>
            Le<br />
            <span style={{ color: "#d4af37" }}>Speakeasy</span>
          </h1>
          <p className="mx-auto mb-10 max-w-md text-base leading-relaxed" style={{ color: "#a0896a" }}>
            Un sanctuaire pour les amateurs de cocktails d'exception. Derrière une porte dérobée,
            découvrez l'art du bar dans toute sa splendeur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 text-sm tracking-widest uppercase font-medium transition-colors"
              style={{ backgroundColor: "#d4af37", color: "#0d0600" }}
            >
              Voir la carte
            </button>
            <button
              className="px-8 py-3 text-sm tracking-widest uppercase border transition-colors"
              style={{ borderColor: "#b87333", color: "#b87333" }}
            >
              Notre histoire
            </button>
          </div>
        </div>
      </section>

      {/* Featured cocktails */}
      <section className="px-6 py-20" style={{ backgroundColor: "#110800" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs tracking-[0.4em] uppercase" style={{ color: "#b87333" }}>La sélection du barman</p>
            <h2 className="text-4xl font-bold" style={{ color: "#d4af37" }}>Cocktails d'Exception</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "The Prohibition", desc: "Bourbon, miel sauvage, citron, bitter angostura", price: "16€" },
              { name: "Velvet Rose", desc: "Gin, liqueur de rose, champagne, fraise des bois", price: "18€" },
              { name: "Smoky Joe", desc: "Mezcal, sirop agave, lime, sel fumé, gingembre", price: "17€" },
            ].map((cocktail) => (
              <div
                key={cocktail.name}
                className="p-6 border"
                style={{ borderColor: "#2a1a00", backgroundColor: "#160a00" }}
              >
                <div className="mb-1 flex items-start justify-between">
                  <h3 className="text-xl font-semibold" style={{ color: "#f5e6c8" }}>{cocktail.name}</h3>
                  <span className="text-lg font-bold" style={{ color: "#d4af37" }}>{cocktail.price}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#7a6040" }}>{cocktail.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-3 text-xs tracking-[0.4em] uppercase" style={{ color: "#b87333" }}>Notre Univers</p>
            <h2 className="mb-6 text-4xl font-bold" style={{ color: "#f5e6c8" }}>
              L'Art de<br /><span style={{ color: "#d4af37" }}>Recevoir</span>
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#7a6040" }}>
              Fondé dans les années folles, Le Speakeasy perpétue la tradition des grands bars clandestins
              où le jazz coulait aussi librement que le whisky.
            </p>
            <p className="leading-relaxed" style={{ color: "#7a6040" }}>
              Chaque cocktail est une œuvre d'art, chaque soirée une expérience unique.
              Nos barmen sont les gardiens d'un savoir-faire centenaire.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[["50+", "Cocktails"], ["1923", "Fondé en"], ["18h–2h", "Ouverture"]].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold" style={{ color: "#d4af37" }}>{val}</div>
                  <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "#7a6040" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="h-80 flex items-center justify-center text-6xl"
            style={{ backgroundColor: "#160a00", border: "1px solid #2a1a00" }}
          >
            🥃
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section
        className="px-6 py-20 text-center"
        style={{ background: "linear-gradient(135deg, #1a0800 0%, #2a1200 50%, #1a0800 100%)" }}
      >
        <p className="mb-3 text-xs tracking-[0.4em] uppercase" style={{ color: "#b87333" }}>Réservations</p>
        <h2 className="mb-6 text-4xl font-bold" style={{ color: "#f5e6c8" }}>
          Réservez Votre<br /><span style={{ color: "#d4af37" }}>Table</span>
        </h2>
        <p className="mx-auto mb-8 max-w-md" style={{ color: "#7a6040" }}>
          Pour une soirée inoubliable, réservez votre espace dans notre antre du cocktail.
        </p>
        <button
          className="px-10 py-4 text-sm tracking-widest uppercase font-bold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#d4af37", color: "#0d0600" }}
        >
          Réserver maintenant
        </button>
      </section>

      {/* Footer */}
      <footer className="px-10 py-8 border-t text-center text-sm" style={{ borderColor: "#2a1a00", color: "#4a3520" }}>
        <p>© 2024 Le Speakeasy · 12 Rue des Arts, Paris · Ouvert du Mardi au Samedi, 18h–2h</p>
      </footer>
    </div>
  );
}
