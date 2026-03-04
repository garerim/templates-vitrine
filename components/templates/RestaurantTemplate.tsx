export function RestaurantTemplate() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf7f2", color: "#2c1810", fontFamily: "'Georgia', serif" }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-10 py-5"
        style={{ backgroundColor: "#faf7f2", borderBottom: "1px solid #e8ddd0" }}
      >
        <div className="text-xs tracking-[0.4em] uppercase" style={{ color: "#722f37" }}>
          La Table · Restaurant
        </div>
        <div className="text-3xl font-bold tracking-tight" style={{ color: "#2c1810" }}>
          La Table
        </div>
        <div className="hidden md:flex gap-6 text-xs tracking-widest uppercase" style={{ color: "#8a7060" }}>
          <a href="#" className="hover:text-stone-900 transition-colors">Menu</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Le Chef</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Réservations</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative flex items-center justify-center px-6 py-32 text-center"
        style={{ background: "linear-gradient(180deg, #faf7f2 0%, #f0e8de 100%)" }}
      >
        <div>
          <p className="mb-4 text-xs tracking-[0.5em] uppercase" style={{ color: "#c9a84c" }}>
            Restaurant Gastronomique · Paris
          </p>
          <h1 className="mb-6 text-7xl md:text-9xl font-bold" style={{ color: "#2c1810", lineHeight: 1 }}>
            La<br /><em style={{ color: "#722f37" }}>Table</em>
          </h1>
          <div className="mx-auto mb-8 h-px w-24" style={{ backgroundColor: "#c9a84c" }} />
          <p className="mx-auto max-w-lg text-lg leading-relaxed" style={{ color: "#8a7060" }}>
            Une cuisine de terroir sublimée par la passion d'un chef étoilé.
            Chaque assiette raconte l'histoire d'un territoire, d'une saison, d'un artisan.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button
              className="px-8 py-3 text-sm tracking-widest uppercase transition-colors"
              style={{ backgroundColor: "#722f37", color: "#faf7f2" }}
            >
              Réserver une table
            </button>
            <button
              className="px-8 py-3 text-sm tracking-widest uppercase border transition-colors"
              style={{ borderColor: "#722f37", color: "#722f37" }}
            >
              Voir la carte
            </button>
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="px-6 py-20" style={{ backgroundColor: "#f5ede4" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs tracking-[0.4em] uppercase" style={{ color: "#c9a84c" }}>Notre sélection</p>
            <h2 className="text-4xl font-bold" style={{ color: "#2c1810" }}>Les Signatures</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: "🦞", name: "Homard Breton", desc: "Bisque de homard, quenelles de pomme de terre, caviar osciètre", price: "68€" },
              { emoji: "🥩", name: "Côte de Bœuf", desc: "Bœuf maturé 45 jours, jus réduit au porto, légumes racines rôtis", price: "54€" },
              { emoji: "🍮", name: "Soufflé Grand Marnier", desc: "Soufflé chaud à l'orange, glace vanille Bourbon", price: "18€" },
            ].map((dish) => (
              <div key={dish.name} className="text-center">
                <div className="mb-4 text-5xl">{dish.emoji}</div>
                <h3 className="mb-2 text-xl font-semibold" style={{ color: "#2c1810" }}>{dish.name}</h3>
                <p className="mb-3 text-sm leading-relaxed" style={{ color: "#8a7060" }}>{dish.desc}</p>
                <span className="text-lg font-bold" style={{ color: "#722f37" }}>{dish.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            className="h-72 flex items-center justify-center text-6xl rounded-sm"
            style={{ backgroundColor: "#e8ddd0" }}
          >
            👨‍🍳
          </div>
          <div>
            <p className="mb-3 text-xs tracking-[0.4em] uppercase" style={{ color: "#c9a84c" }}>Le Chef</p>
            <h2 className="mb-2 text-4xl font-bold" style={{ color: "#2c1810" }}>Antoine Moreau</h2>
            <p className="mb-1 text-sm" style={{ color: "#722f37" }}>2 étoiles Michelin · Meilleur Ouvrier de France</p>
            <div className="my-4 h-px w-16" style={{ backgroundColor: "#c9a84c" }} />
            <p className="mb-4 leading-relaxed" style={{ color: "#8a7060" }}>
              Formé auprès des plus grands noms de la gastronomie française, Antoine Moreau
              a développé une cuisine personnelle, entre tradition et innovation,
              profondément ancrée dans les terroirs de France.
            </p>
            <p className="leading-relaxed" style={{ color: "#8a7060" }}>
              Sa philosophie : des produits d'exception, traités avec humilité et précision.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section
        className="px-6 py-20 text-center"
        style={{ backgroundColor: "#722f37" }}
      >
        <p className="mb-3 text-xs tracking-[0.4em] uppercase" style={{ color: "#c9a84c" }}>Une soirée inoubliable</p>
        <h2 className="mb-4 text-4xl font-bold" style={{ color: "#faf7f2" }}>Réservez votre table</h2>
        <p className="mx-auto mb-8 max-w-md" style={{ color: "#e8c4b8" }}>
          Disponible du mardi au samedi, déjeuner et dîner. Nous vous recommandons de réserver au minimum 2 semaines à l'avance.
        </p>
        <button
          className="px-10 py-4 text-sm tracking-widest uppercase font-bold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#c9a84c", color: "#2c1810" }}
        >
          Prendre une réservation
        </button>
      </section>

      {/* Footer */}
      <footer
        className="px-10 py-8 text-center text-sm"
        style={{ backgroundColor: "#2c1810", color: "#8a7060" }}
      >
        <p className="mb-1">La Table · 34 Avenue Montaigne, Paris 8e</p>
        <p>Tél : 01 42 00 00 00 · contact@latable.fr · Ouvert du Mardi au Samedi</p>
      </footer>
    </div>
  );
}
