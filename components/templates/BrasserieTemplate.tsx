export function BrasserieTemplate() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f3eb", color: "#1a120a", fontFamily: "'Georgia', serif" }}>
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-10 py-5"
        style={{ backgroundColor: "#2c3e2d", color: "#f5ede0" }}
      >
        <div className="text-2xl font-bold tracking-wide" style={{ color: "#c9a51e" }}>
          Le Zinc
        </div>
        <div className="hidden md:flex gap-8 text-sm tracking-wider" style={{ color: "#d4c9b5" }}>
          <a href="#" className="hover:text-white transition-colors">La Carte</a>
          <a href="#" className="hover:text-white transition-colors">Formules</a>
          <a href="#" className="hover:text-white transition-colors">Événements</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button
          className="px-5 py-2 text-sm font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#c9a51e", color: "#1a120a" }}
        >
          Réserver
        </button>
      </nav>

      {/* Hero — image plein écran avec overlay */}
      <section
        className="relative flex items-end justify-start px-10 md:px-20"
        style={{
          minHeight: "88vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(26,18,10,0.85) 0%, rgba(26,18,10,0.3) 60%, rgba(0,0,0,0) 100%)" }}
        />
        <div className="relative z-10 pb-16 max-w-2xl">
          <p className="mb-3 text-xs tracking-[0.5em] uppercase" style={{ color: "#c9a51e" }}>
            Brasserie Parisienne · Depuis 1962
          </p>
          <h1 className="mb-4 font-bold leading-none" style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", color: "#f5ede0" }}>
            Le Zinc
          </h1>
          <p className="mb-8 text-lg leading-relaxed" style={{ color: "#d4c9b5", maxWidth: "480px" }}>
            Une brasserie de quartier où se mêlent convivialité, cuisine authentique
            et le plaisir simple d'un bon repas entre amis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-8 py-3 text-sm font-medium tracking-wider transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#c9a51e", color: "#1a120a" }}
            >
              Réserver une table
            </button>
            <button
              className="px-8 py-3 text-sm tracking-wider border transition-colors"
              style={{ borderColor: "#f5ede0", color: "#f5ede0" }}
            >
              Voir la carte
            </button>
          </div>
        </div>
      </section>

      {/* Nos classiques */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs tracking-[0.4em] uppercase" style={{ color: "#c9a51e" }}>
              Sélection du chef
            </p>
            <h2 className="text-4xl font-bold" style={{ color: "#1a120a" }}>Nos Classiques</h2>
            <div className="mx-auto mt-4 h-px w-16" style={{ backgroundColor: "#c9a51e" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80&auto=format&fit=crop",
                name: "Entrecôte du boucher",
                desc: "Bœuf charolais, sauce béarnaise maison, frites fraîches et salade verte",
                price: "28€",
              },
              {
                img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format&fit=crop",
                name: "Tartare de thon",
                desc: "Thon rouge, avocat, sésame, ponzu, herbes fraîches et toast de pain brioche",
                price: "22€",
              },
              {
                img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80&auto=format&fit=crop",
                name: "Tarte Tatin",
                desc: "Pommes caramélisées, pâte feuilletée pur beurre, crème fraîche épaisse normande",
                price: "9€",
              },
            ].map((dish) => (
              <div
                key={dish.name}
                className="overflow-hidden rounded-sm"
                style={{ border: "1px solid #e0d4c0" }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={dish.img}
                    alt={dish.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug" style={{ color: "#1a120a" }}>{dish.name}</h3>
                    <span className="text-base font-bold shrink-0" style={{ color: "#c9a51e" }}>{dish.price}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#7a6040" }}>{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie ambiance */}
      <section className="py-4 px-4" style={{ backgroundColor: "#2c3e2d" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {[
            {
              img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
              label: "La salle",
            },
            {
              img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80&auto=format&fit=crop",
              label: "La terrasse",
            },
            {
              img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80&auto=format&fit=crop",
              label: "Le bar",
            },
          ].map((item) => (
            <div key={item.label} className="relative overflow-hidden" style={{ height: "280px" }}>
              <img
                src={item.img}
                alt={item.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
              >
                <p className="text-sm tracking-widest uppercase" style={{ color: "#c9a51e" }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formules */}
      <section className="px-6 py-20" style={{ backgroundColor: "#f0e8d8" }}>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs tracking-[0.4em] uppercase" style={{ color: "#c9a51e" }}>Midi & Soir</p>
            <h2 className="text-4xl font-bold" style={{ color: "#1a120a" }}>Nos Formules</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Formule Zinc",
                items: ["Entrée + Plat", "ou Plat + Dessert"],
                price: "19,90€",
                note: "Disponible le midi",
              },
              {
                name: "Formule Brasserie",
                items: ["Entrée + Plat + Dessert", "Verre de vin inclus"],
                price: "32€",
                note: "Midi et soir",
                highlight: true,
              },
              {
                name: "Menu Découverte",
                items: ["5 plats signature", "Accord mets & vins"],
                price: "58€",
                note: "Sur réservation",
              },
            ].map((formula) => (
              <div
                key={formula.name}
                className="p-8 text-center"
                style={{
                  backgroundColor: formula.highlight ? "#2c3e2d" : "#f8f3eb",
                  border: formula.highlight ? "none" : "1px solid #d4c4a8",
                  color: formula.highlight ? "#f5ede0" : "#1a120a",
                }}
              >
                <h3 className="mb-2 text-xl font-bold">{formula.name}</h3>
                <div className="my-4 h-px" style={{ backgroundColor: formula.highlight ? "#c9a51e" : "#d4c4a8" }} />
                <ul className="mb-6 space-y-2">
                  {formula.items.map((item) => (
                    <li key={item} className="text-sm" style={{ color: formula.highlight ? "#d4c9b5" : "#6b5040" }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mb-2 text-3xl font-bold" style={{ color: "#c9a51e" }}>{formula.price}</p>
                <p className="text-xs tracking-widest uppercase" style={{ color: formula.highlight ? "#d4c9b5" : "#9a8060" }}>
                  {formula.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire / About */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div style={{ height: "380px", overflow: "hidden", borderRadius: "2px" }}>
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80&auto=format&fit=crop"
              alt="Intérieur du Zinc"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="mb-3 text-xs tracking-[0.4em] uppercase" style={{ color: "#c9a51e" }}>Notre histoire</p>
            <h2 className="mb-6 text-4xl font-bold leading-tight" style={{ color: "#1a120a" }}>
              Une institution<br />de quartier
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#7a6040" }}>
              Ouvert en 1962 par la famille Morel, Le Zinc est devenu au fil des décennies
              l'adresse incontournable du quartier. Sa grande salle animée, son zinc authentique
              et sa cuisine généreuse ont traversé les époques sans jamais trahir leur âme.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "#7a6040" }}>
              Aujourd'hui repris par Martin, petit-fils du fondateur, la brasserie perpétue
              la tradition en y ajoutant une touche de modernité dans les assiettes.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[["1962", "Fondé en"], ["60+", "Plats à la carte"], ["12h–23h", "Ouvert"]].map(([val, label]) => (
                <div key={label} className="border-t pt-4" style={{ borderColor: "#d4c4a8" }}>
                  <div className="text-xl font-bold" style={{ color: "#c9a51e" }}>{val}</div>
                  <div className="text-xs mt-1 tracking-widest uppercase" style={{ color: "#9a8060" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Réservation CTA */}
      <section
        className="px-6 py-20 text-center"
        style={{ backgroundColor: "#c04b1e" }}
      >
        <p className="mb-3 text-xs tracking-[0.5em] uppercase" style={{ color: "#f5c5a8" }}>Réservations</p>
        <h2 className="mb-4 text-4xl font-bold" style={{ color: "#f8f3eb" }}>
          Réservez votre table
        </h2>
        <p className="mx-auto mb-8 max-w-md text-base" style={{ color: "#f5c5a8" }}>
          Tous les jours de 12h à 14h30 et de 19h à 23h.<br />
          Fermé le dimanche soir et le lundi.
        </p>
        <button
          className="px-10 py-4 text-sm tracking-wider font-bold transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#f8f3eb", color: "#c04b1e" }}
        >
          Réserver maintenant
        </button>
      </section>

      {/* Footer */}
      <footer
        className="px-10 py-8 text-center text-sm"
        style={{ backgroundColor: "#1a2a1a", color: "#8a9a8a" }}
      >
        <p className="text-base font-semibold mb-1" style={{ color: "#c9a51e" }}>Le Zinc — Brasserie Parisienne</p>
        <p>42 Rue du Faubourg Saint-Antoine, Paris 11e</p>
        <p className="mt-1">Tél : 01 43 00 00 00 · contact@lezinc.fr</p>
      </footer>
    </div>
  );
}
